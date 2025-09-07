#!/bin/bash

# Script to set up Supabase database
# Make sure you have psql installed and accessible

echo "Setting up Supabase database..."

# Run the SQL setup script
psql "postgresql://postgres:[djc4zwp8qmv9NAV_kxb]@db.viwmgaptepnldhdymkzg.supabase.co:5432/postgres" -f setup_supabase.sql

echo "Database setup complete!"
