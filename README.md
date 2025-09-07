# ShouldaStocks - Investment Analysis Tool

A sleek web application that lets you discover what your purchases could have been worth if you had invested in the company's stock instead.

## Features

- **Product Search**: Search for any product (iPhone, Tesla Model 3, MacBook Pro, etc.)
- **Investment Analysis**: See how much your money would be worth if invested in the company's stock
- **Interactive Charts**: Visualize stock performance and investment growth over time
- **Real-time Calculations**: Automatic calculation of shares purchased, current value, and returns
- **Modern UI**: Sleek, responsive design with smooth animations

## How It Works

1. **Search for a Product**: Type any product name (e.g., "iPhone 15 Pro", "Tesla Model 3")
2. **View Analysis**: See the product details, release date, and MSRP
3. **Investment Metrics**: 
   - Number of shares you could have purchased
   - Current value of those shares
   - Total return and percentage gain/loss
4. **Performance Chart**: Interactive graph showing stock price and investment value over time

## Supported Products

The app includes a comprehensive database of products across categories:

### Technology
- **Apple**: iPhone, MacBook, iPad, AirPods, Apple Watch
- **Tesla**: Model 3, Model Y, Model S, Model X
- **Gaming**: PlayStation 5, Xbox Series X, Nintendo Switch
- **Hardware**: NVIDIA RTX GPUs, AMD processors
- **Other**: Samsung Galaxy, Google Pixel, Meta Quest

### Fashion & Lifestyle
- **Nike**: Air Jordan, Converse
- **Adidas**: Yeezy sneakers

### Automotive
- **BMW**: 3 Series
- **Mercedes**: C-Class
- **Audi**: A4

## Setup Instructions

### For Development/Demo
1. Clone or download the files
2. Open `index.html` in a web browser
3. The app uses mock stock data for demonstration

### For Production with Real Stock Data

To use real stock data, you'll need to:

1. **Get a Stock API Key**:
   - Sign up for [Alpha Vantage](https://www.alphavantage.co/) (free tier available)
   - Or use [Yahoo Finance API](https://rapidapi.com/apidojo/api/yahoo-finance1/)
   - Or [IEX Cloud](https://iexcloud.io/)

2. **Update the API Integration**:
   Replace the `generateMockStockData` function in `script.js` with real API calls:

```javascript
async fetchStockData(symbol, startDate) {
    const apiKey = 'YOUR_API_KEY_HERE';
    const endDate = new Date().toISOString().split('T')[0];
    
    try {
        const response = await fetch(
            `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}&outputsize=full`
        );
        const data = await response.json();
        
        // Process the API response and return formatted data
        return this.processAlphaVantageData(data, startDate);
    } catch (error) {
        console.error('Error fetching stock data:', error);
        throw error;
    }
}
```

3. **Add CORS Handling** (if needed):
   For local development, you might need to serve the files through a local server to avoid CORS issues.

## File Structure

```
ShouldaStocks/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Key Features Explained

### Investment Calculation
- **Shares Calculation**: `Math.floor(productPrice / stockPriceAtRelease)`
- **Current Value**: `sharesPurchased * currentStockPrice`
- **Return**: `currentValue - originalProductPrice`

### Chart Visualization
- Uses Chart.js for interactive charts
- Dual y-axis: stock price (left) and investment value (right)
- Responsive design that works on mobile and desktop

### Search Functionality
- Real-time suggestions as you type
- Fuzzy matching for product names
- Click suggestions to auto-fill search

## Customization

### Adding New Products
To add new products, update the `productDatabase` object in `script.js`:

```javascript
'product name': { 
    name: 'Display Name', 
    price: 999, 
    releaseDate: 'YYYY-MM-DD', 
    company: 'Company Name', 
    symbol: 'STOCK_SYMBOL' 
}
```

### Styling
The app uses CSS custom properties and modern design principles. Key styling is in `styles.css` with:
- CSS Grid and Flexbox for layouts
- CSS gradients for visual appeal
- Responsive design with mobile-first approach
- Smooth animations and transitions

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

This project is open source and available under the MIT License.

## Disclaimer

This application is for educational and entertainment purposes only. Past performance does not guarantee future results. Always consult with a financial advisor before making investment decisions.
