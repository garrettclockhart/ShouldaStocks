const { Client } = require('pg');
const fs = require('fs');

async function setupDatabase() {
    const client = new Client({
        connectionString: 'postgresql://postgres:[djc4zwp8qmv9NAV_kxb]@db.viwmgaptepnldhdymkzg.supabase.co:5432/postgres'
    });

    try {
        await client.connect();
        console.log('Connected to Supabase database');

        // Read the SQL file
        const sql = fs.readFileSync('setup_supabase.sql', 'utf8');
        
        // Execute the SQL
        await client.query(sql);
        console.log('Database setup completed successfully!');
        
    } catch (error) {
        console.error('Error setting up database:', error);
    } finally {
        await client.end();
    }
}

setupDatabase();
