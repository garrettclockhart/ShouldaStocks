const { createClient } = require('@supabase/supabase-js');

// Supabase configuration
const SUPABASE_URL = 'https://viwmgaptepnldhdymkzg.supabase.co';
const SUPABASE_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpd21nYXB0ZXBubGRoZHlta3pnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NzIxODYxOCwiZXhwIjoyMDcyNzk0NjE4fQ.Sd8f5Gi4CegIrmPbKKCgMQEMRNnHaVHvvw1zIVwES0E';

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// Test function to check database connection and existing data
async function testConnection() {
    console.log('Testing Supabase connection...');
    
    try {
        // Test basic connection
        const { data, error } = await supabase
            .from('product_table')
            .select('*')
            .limit(5);
        
        if (error) {
            console.error('Connection test failed:', error);
            return false;
        }
        
        console.log('✅ Connection successful!');
        console.log('Sample products in database:');
        data.forEach(product => {
            console.log(`- ${product.name} (${product.key}): $${product.price} - ${product.company} (${product.symbol})`);
        });
        
        return true;
        
    } catch (error) {
        console.error('Connection test error:', error);
        return false;
    }
}

// Test function to check if we can insert data (using anon key limitations)
async function testInsert() {
    console.log('\nTesting data insertion...');
    
    try {
        // Try to insert a test product
        const testProduct = {
            key: 'test_product_' + Date.now(),
            name: 'Test Product',
            price: 99.99,
            release_date: '2024-01-01',
            company: 'Test Company',
            symbol: 'TEST'
        };
        
        const { data, error } = await supabase
            .from('product_table')
            .insert(testProduct);
        
        if (error) {
            console.log('⚠️  Insert test failed (expected with anon key):', error.message);
            console.log('This is normal - you need a service role key for inserts');
            return false;
        }
        
        console.log('✅ Insert test successful!');
        return true;
        
    } catch (error) {
        console.log('⚠️  Insert test error (expected with anon key):', error.message);
        return false;
    }
}

// Main test function
async function runTests() {
    console.log('🧪 Running Supabase Database Tests\n');
    
    const connectionOk = await testConnection();
    await testInsert();
    
    console.log('\n📋 Test Summary:');
    console.log(`Connection: ${connectionOk ? '✅ PASS' : '❌ FAIL'}`);
    console.log('Insert: ⚠️  REQUIRES SERVICE ROLE KEY');
    
    if (connectionOk) {
        console.log('\n✅ Your database is accessible and ready for imports!');
        console.log('📝 Next steps:');
        console.log('1. Get your service role key from Supabase dashboard');
        console.log('2. Update import_products.js with the service role key');
        console.log('3. Run: npm run import:sample');
    } else {
        console.log('\n❌ Database connection failed. Please check your configuration.');
    }
}

// Run tests
runTests().catch(console.error);
