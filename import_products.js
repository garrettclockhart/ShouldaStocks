const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

// Supabase configuration
const SUPABASE_URL = 'https://viwmgaptepnldhdymkzg.supabase.co';
const SUPABASE_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpd21nYXB0ZXBubGRoZHlta3pnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NzIxODYxOCwiZXhwIjoyMDcyNzk0NjE4fQ.Sd8f5Gi4CegIrmPbKKCgMQEMRNnHaVHvvw1zIVwES0E';

// Initialize Supabase client with service role key for admin operations
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// Sample product data in the format you requested
const sampleProducts = [
    {
        product_id: 'sample_product_1',
        release_date: '2024-01-15',
        price: 299.99
    },
    {
        product_id: 'sample_product_2', 
        release_date: '2024-02-20',
        price: 599.99
    },
    {
        product_id: 'sample_product_3',
        release_date: '2024-03-10',
        price: 1299.99
    }
];

// Function to import products
async function importProducts(products) {
    console.log('Starting product import...');
    
    try {
        // Transform the data to match your table structure
        const transformedProducts = products.map(product => ({
            product_id: product.product_id,
            product_name: product.product_name || product.product_id.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            price: Math.round(product.price), // Convert to integer as required by the table
            release_date: product.release_date,
            company_name: product.company_name || 'Unknown Company'
        }));

        console.log('Transformed products:', transformedProducts);

        // Insert products into Supabase
        const { data, error } = await supabase
            .from('product_table')
            .upsert(transformedProducts, { 
                onConflict: 'product_id',
                ignoreDuplicates: false 
            });

        if (error) {
            console.error('Error importing products:', error);
            return false;
        }

        console.log('Successfully imported products:', data);
        return true;

    } catch (error) {
        console.error('Import failed:', error);
        return false;
    }
}

// Function to import from CSV file
async function importFromCSV(filePath) {
    console.log(`Importing products from CSV: ${filePath}`);
    
    try {
        const csvContent = fs.readFileSync(filePath, 'utf8');
        const lines = csvContent.split('\n');
        const headers = lines[0].split(',').map(h => h.trim());
        
        console.log('CSV Headers:', headers);
        
        const products = [];
        
        for (let i = 1; i < lines.length; i++) {
            if (lines[i].trim()) {
                const values = lines[i].split(',').map(v => v.trim());
                const product = {};
                
                headers.forEach((header, index) => {
                    product[header] = values[index];
                });
                
                products.push(product);
            }
        }
        
        console.log('Parsed products:', products);
        return await importProducts(products);
        
    } catch (error) {
        console.error('CSV import failed:', error);
        return false;
    }
}

// Function to import from JSON file
async function importFromJSON(filePath) {
    console.log(`Importing products from JSON: ${filePath}`);
    
    try {
        const jsonContent = fs.readFileSync(filePath, 'utf8');
        const products = JSON.parse(jsonContent);
        
        console.log('Parsed products:', products);
        return await importProducts(products);
        
    } catch (error) {
        console.error('JSON import failed:', error);
        return false;
    }
}

// Main function
async function main() {
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
        console.log('Usage:');
        console.log('  node import_products.js sample                    # Import sample data');
        console.log('  node import_products.js csv <filepath>           # Import from CSV file');
        console.log('  node import_products.js json <filepath>          # Import from JSON file');
        return;
    }
    
    const command = args[0];
    
    switch (command) {
        case 'sample':
            await importProducts(sampleProducts);
            break;
            
        case 'csv':
            if (args[1]) {
                await importFromCSV(args[1]);
            } else {
                console.error('Please provide CSV file path');
            }
            break;
            
        case 'json':
            if (args[1]) {
                await importFromJSON(args[1]);
            } else {
                console.error('Please provide JSON file path');
            }
            break;
            
        default:
            console.error('Unknown command:', command);
    }
}

// Run the script
if (require.main === module) {
    main().catch(console.error);
}

module.exports = {
    importProducts,
    importFromCSV,
    importFromJSON
};
