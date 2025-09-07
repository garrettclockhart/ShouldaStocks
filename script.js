// Product database with company mappings and stock symbols
const productDatabase = {
    // Apple Products
    'iphone 15 pro': { name: 'iPhone 15 Pro', price: 999, releaseDate: '2023-09-22', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 15': { name: 'iPhone 15', price: 799, releaseDate: '2023-09-22', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 14 pro': { name: 'iPhone 14 Pro', price: 999, releaseDate: '2022-09-16', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 14': { name: 'iPhone 14', price: 799, releaseDate: '2022-09-16', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 13 pro': { name: 'iPhone 13 Pro', price: 999, releaseDate: '2021-09-24', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 13': { name: 'iPhone 13', price: 799, releaseDate: '2021-09-24', company: 'Apple Inc.', symbol: 'AAPL' },
    'macbook pro': { name: 'MacBook Pro 14"', price: 1999, releaseDate: '2021-10-26', company: 'Apple Inc.', symbol: 'AAPL' },
    'macbook air': { name: 'MacBook Air M2', price: 1199, releaseDate: '2022-07-15', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipad pro': { name: 'iPad Pro 12.9"', price: 1099, releaseDate: '2022-10-26', company: 'Apple Inc.', symbol: 'AAPL' },
    'airpods pro': { name: 'AirPods Pro 2nd Gen', price: 249, releaseDate: '2022-09-23', company: 'Apple Inc.', symbol: 'AAPL' },
    'apple watch': { name: 'Apple Watch Series 9', price: 399, releaseDate: '2023-09-22', company: 'Apple Inc.', symbol: 'AAPL' },

    // Tesla Products
    'tesla model 3': { name: 'Tesla Model 3', price: 38990, releaseDate: '2017-07-28', company: 'Tesla Inc.', symbol: 'TSLA' },
    'tesla model y': { name: 'Tesla Model Y', price: 47740, releaseDate: '2020-03-15', company: 'Tesla Inc.', symbol: 'TSLA' },
    'tesla model s': { name: 'Tesla Model S', price: 74990, releaseDate: '2012-06-22', company: 'Tesla Inc.', symbol: 'TSLA' },
    'tesla model x': { name: 'Tesla Model X', price: 79990, releaseDate: '2015-09-29', company: 'Tesla Inc.', symbol: 'TSLA' },

    // Gaming Consoles
    'playstation 5': { name: 'PlayStation 5', price: 499, releaseDate: '2020-11-12', company: 'Sony Group Corporation', symbol: 'SONY' },
    'xbox series x': { name: 'Xbox Series X', price: 499, releaseDate: '2020-11-10', company: 'Microsoft Corporation', symbol: 'MSFT' },
    'nintendo switch': { name: 'Nintendo Switch', price: 299, releaseDate: '2017-03-03', company: 'Nintendo Co., Ltd.', symbol: 'NTDOY' },

    // Tech Hardware
    'nvidia rtx 4090': { name: 'NVIDIA GeForce RTX 4090', price: 1599, releaseDate: '2022-10-12', company: 'NVIDIA Corporation', symbol: 'NVDA' },
    'nvidia rtx 4080': { name: 'NVIDIA GeForce RTX 4080', price: 1199, releaseDate: '2022-11-16', company: 'NVIDIA Corporation', symbol: 'NVDA' },
    'amd ryzen 9': { name: 'AMD Ryzen 9 7950X', price: 699, releaseDate: '2022-09-27', company: 'Advanced Micro Devices', symbol: 'AMD' },

    // Fashion/Shoes
    'nike air jordan': { name: 'Nike Air Jordan 1', price: 170, releaseDate: '1985-04-01', company: 'Nike Inc.', symbol: 'NKE' },
    'adidas yeezy': { name: 'Adidas Yeezy Boost 350', price: 220, releaseDate: '2015-06-27', company: 'Adidas AG', symbol: 'ADDYY' },
    'converse chuck taylor': { name: 'Converse Chuck Taylor All Star', price: 60, releaseDate: '1917-01-01', company: 'Nike Inc.', symbol: 'NKE' },

    // Other Electronics
    'samsung galaxy s23': { name: 'Samsung Galaxy S23', price: 799, releaseDate: '2023-02-17', company: 'Samsung Electronics', symbol: 'SSNLF' },
    'google pixel 7': { name: 'Google Pixel 7', price: 599, releaseDate: '2022-10-13', company: 'Alphabet Inc.', symbol: 'GOOGL' },
    'meta quest 3': { name: 'Meta Quest 3', price: 499, releaseDate: '2023-10-10', company: 'Meta Platforms Inc.', symbol: 'META' },

    // Cars
    'bmw 3 series': { name: 'BMW 3 Series', price: 41450, releaseDate: '2019-03-01', company: 'Bayerische Motoren Werke AG', symbol: 'BMWYY' },
    'mercedes c class': { name: 'Mercedes-Benz C-Class', price: 43550, releaseDate: '2021-02-23', company: 'Mercedes-Benz Group AG', symbol: 'MBGYY' },
    'audi a4': { name: 'Audi A4', price: 39500, releaseDate: '2017-01-01', company: 'Volkswagen AG', symbol: 'VWAGY' }
};

class ShouldaStocksApp {
    constructor() {
        this.chart = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupSearchSuggestions();
    }

    setupEventListeners() {
        const searchBtn = document.getElementById('searchBtn');
        const searchInput = document.getElementById('productSearch');

        searchBtn.addEventListener('click', () => this.handleSearch());
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleSearch();
            }
        });

        searchInput.addEventListener('input', (e) => {
            this.showSuggestions(e.target.value);
        });
    }

    setupSearchSuggestions() {
        const searchInput = document.getElementById('productSearch');
        const suggestions = document.getElementById('searchSuggestions');

        // Hide suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !suggestions.contains(e.target)) {
                suggestions.style.display = 'none';
            }
        });
    }

    showSuggestions(query) {
        const suggestions = document.getElementById('searchSuggestions');
        
        if (query.length < 2) {
            suggestions.style.display = 'none';
            return;
        }

        const matches = Object.keys(productDatabase).filter(key => 
            key.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 5);

        if (matches.length === 0) {
            suggestions.style.display = 'none';
            return;
        }

        suggestions.innerHTML = matches.map(key => {
            const product = productDatabase[key];
            return `<div class="suggestion-item" data-product="${key}">
                <strong>${product.name}</strong><br>
                <small>${product.company} - $${product.price.toLocaleString()}</small>
            </div>`;
        }).join('');

        // Add click handlers to suggestions
        suggestions.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                const productKey = item.dataset.product;
                document.getElementById('productSearch').value = productKey;
                suggestions.style.display = 'none';
                this.handleSearch();
            });
        });

        suggestions.style.display = 'block';
    }

    async handleSearch() {
        const query = document.getElementById('productSearch').value.toLowerCase().trim();
        
        if (!query) {
            this.showError('Please enter a product name');
            return;
        }

        // Find matching product
        const productKey = Object.keys(productDatabase).find(key => 
            key.toLowerCase().includes(query) || 
            productDatabase[key].name.toLowerCase().includes(query)
        );

        if (!productKey) {
            this.showError('Product not found. Try searching for: iPhone, Tesla Model 3, MacBook Pro, PlayStation 5, etc.');
            return;
        }

        const product = productDatabase[productKey];
        this.showLoading(true);
        
        try {
            await this.analyzeInvestment(product);
        } catch (error) {
            console.error('Error analyzing investment:', error);
            this.showError('Failed to fetch stock data. Please try again.');
        } finally {
            this.showLoading(false);
        }
    }

    async analyzeInvestment(product) {
        try {
            // Get historical stock data
            const stockData = await this.fetchStockData(product.symbol, product.releaseDate);
            
            if (!stockData || stockData.length === 0) {
                throw new Error('No stock data available');
            }

            // Calculate investment metrics
            const initialPrice = stockData[0].close;
            const currentPrice = stockData[stockData.length - 1].close;
            const sharesPurchased = Math.floor(product.price / initialPrice);
            const currentValue = sharesPurchased * currentPrice;
            const totalReturn = currentValue - product.price;
            const returnPercentage = ((currentValue - product.price) / product.price) * 100;

            // Display results
            this.displayResults(product, {
                sharesPurchased,
                currentValue,
                totalReturn,
                returnPercentage,
                stockData
            });

        } catch (error) {
            console.error('Error in investment analysis:', error);
            throw error;
        }
    }

    async fetchStockData(symbol, startDate) {
        // Using Alpha Vantage API (free tier)
        const apiKey = 'demo'; // In production, you'd use a real API key
        const endDate = new Date().toISOString().split('T')[0];
        
        // For demo purposes, we'll simulate stock data
        // In a real app, you'd call: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`
        
        return this.generateMockStockData(symbol, startDate);
    }

    generateMockStockData(symbol, startDate) {
        // Generate realistic mock data based on symbol
        const basePrices = {
            'AAPL': 150,
            'TSLA': 200,
            'NVDA': 300,
            'MSFT': 250,
            'GOOGL': 100,
            'META': 200,
            'NKE': 80,
            'SONY': 60,
            'NTDOY': 15,
            'AMD': 100,
            'ADDYY': 200,
            'SSNLF': 50,
            'BMWYY': 30,
            'MBGYY': 25,
            'VWAGY': 20
        };

        const basePrice = basePrices[symbol] || 100;
        const startDateObj = new Date(startDate);
        const endDateObj = new Date();
        const daysDiff = Math.floor((endDateObj - startDateObj) / (1000 * 60 * 60 * 24));
        
        const data = [];
        let currentPrice = basePrice;
        
        for (let i = 0; i <= daysDiff; i += 7) { // Weekly data points
            const date = new Date(startDateObj.getTime() + i * 24 * 60 * 60 * 1000);
            
            // Simulate realistic stock movement
            const volatility = 0.02;
            const trend = 0.0001; // Slight upward trend
            const randomChange = (Math.random() - 0.5) * volatility;
            
            currentPrice *= (1 + trend + randomChange);
            
            data.push({
                date: date.toISOString().split('T')[0],
                close: Math.round(currentPrice * 100) / 100,
                open: Math.round((currentPrice * 0.99) * 100) / 100,
                high: Math.round((currentPrice * 1.02) * 100) / 100,
                low: Math.round((currentPrice * 0.98) * 100) / 100
            });
        }
        
        return data;
    }

    displayResults(product, metrics) {
        // Show results section
        document.getElementById('resultsSection').style.display = 'block';
        document.getElementById('error').style.display = 'none';

        // Update product info
        document.getElementById('productName').textContent = product.name;
        document.getElementById('productPrice').textContent = `$${product.price.toLocaleString()}`;
        document.getElementById('releaseDate').textContent = `Released: ${new Date(product.releaseDate).toLocaleDateString()}`;
        document.getElementById('companyName').textContent = product.company;

        // Update investment metrics
        document.getElementById('sharesPurchased').textContent = metrics.sharesPurchased.toLocaleString();
        document.getElementById('currentValue').textContent = `$${metrics.currentValue.toLocaleString()}`;
        
        const totalReturnEl = document.getElementById('totalReturn');
        totalReturnEl.textContent = `$${metrics.totalReturn.toLocaleString()}`;
        totalReturnEl.className = `stat-value ${metrics.totalReturn >= 0 ? 'positive' : 'negative'}`;
        
        const returnPercentageEl = document.getElementById('returnPercentage');
        returnPercentageEl.textContent = `${metrics.returnPercentage.toFixed(1)}%`;
        returnPercentageEl.className = `stat-value ${metrics.returnPercentage >= 0 ? 'positive' : 'negative'}`;

        // Create chart
        this.createChart(product, metrics.stockData, metrics.sharesPurchased);
    }

    createChart(product, stockData, sharesPurchased) {
        const ctx = document.getElementById('investmentChart').getContext('2d');
        
        if (this.chart) {
            this.chart.destroy();
        }

        const labels = stockData.map(d => new Date(d.date).toLocaleDateString());
        const stockPrices = stockData.map(d => d.close);
        const investmentValues = stockData.map(d => d.close * sharesPurchased);

        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Stock Price',
                        data: stockPrices,
                        borderColor: '#667eea',
                        backgroundColor: 'rgba(102, 126, 234, 0.1)',
                        borderWidth: 2,
                        fill: true,
                        yAxisID: 'y'
                    },
                    {
                        label: 'Investment Value',
                        data: investmentValues,
                        borderColor: '#764ba2',
                        backgroundColor: 'rgba(118, 75, 162, 0.1)',
                        borderWidth: 2,
                        fill: false,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: `${product.name} Investment Performance`,
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    },
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Date'
                        }
                    },
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: {
                            display: true,
                            text: 'Stock Price ($)'
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: {
                            display: true,
                            text: 'Investment Value ($)'
                        },
                        grid: {
                            drawOnChartArea: false,
                        },
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }

    showLoading(show) {
        document.getElementById('loading').style.display = show ? 'block' : 'none';
        if (show) {
            document.getElementById('resultsSection').style.display = 'none';
            document.getElementById('error').style.display = 'none';
        }
    }

    showError(message) {
        document.getElementById('errorMessage').textContent = message;
        document.getElementById('error').style.display = 'block';
        document.getElementById('resultsSection').style.display = 'none';
        document.getElementById('loading').style.display = 'none';
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new ShouldaStocksApp();
});
