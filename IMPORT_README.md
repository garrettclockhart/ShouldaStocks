# Product Data Import Script

This script helps you import product data into your Supabase database.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Update the service role key in `import_products.js`:
   - Replace `YOUR_SERVICE_ROLE_KEY` with your actual Supabase service role key
   - You can find this in your Supabase dashboard under Settings > API

## Usage

### Import Sample Data
```bash
npm run import:sample
```

### Import from CSV File
Create a CSV file with the following format:
```csv
product_id,release_date,price,company,symbol
iphone_16_pro,2024-09-15,1099.00,Apple Inc.,AAPL
macbook_pro_m4,2024-10-30,1999.00,Apple Inc.,AAPL
```

Then run:
```bash
npm run import:csv your_file.csv
```

### Import from JSON File
Create a JSON file with the following format:
```json
[
  {
    "product_id": "iphone_16_pro",
    "release_date": "2024-09-15", 
    "price": 1099.00,
    "company": "Apple Inc.",
    "symbol": "AAPL"
  }
]
```

Then run:
```bash
npm run import:json your_file.json
```

## Data Format

The script expects data with these fields:
- `product_id`: Unique identifier for the product
- `release_date`: Release date in YYYY-MM-DD format
- `price`: Product price as a number
- `company`: Company name (optional, defaults to "Sample Company")
- `symbol`: Stock symbol (optional, defaults to "SMPL")

The script will automatically transform this data to match your Supabase table structure:
- `product_id` → `key`
- `release_date` → `release_date`
- `price` → `price`
- `company` → `company`
- `symbol` → `symbol`
- `name` → Generated from `product_id`

## Notes

- The script uses `upsert` to handle duplicate products (based on the `key` field)
- Make sure your Supabase service role key has the necessary permissions
- The script will log detailed information about the import process
