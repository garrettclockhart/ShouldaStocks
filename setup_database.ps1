# PowerShell script to set up Supabase database
# Make sure you have psql installed and accessible

Write-Host "Setting up Supabase database..." -ForegroundColor Green

# Run the SQL setup script
$env:PGPASSWORD = "[djc4zwp8qmv9NAV_kxb]"
psql -h db.viwmgaptepnldhdymkzg.supabase.co -p 5432 -U postgres -d postgres -f setup_supabase.sql

Write-Host "Database setup complete!" -ForegroundColor Green
