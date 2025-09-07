// Supabase configuration
const SUPABASE_URL = 'https://viwmgaptepnldhdymkzg.supabase.co';
// Using service role key temporarily - you should replace this with your anon key for production
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpd21nYXB0ZXBubGRoZHlta3pnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NzIxODYxOCwiZXhwIjoyMDcyNzk0NjE4fQ.Sd8f5Gi4CegIrmPbKKCgMQEMRNnHaVHvvw1zIVwES0E';

// Initialize Supabase client
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Global variables
let allProducts = [];
let companies = [];
let currentSearchResults = [];

// DOM elements
const productSearch = document.getElementById('productSearch');
const searchBtn = document.getElementById('searchBtn');
const searchSuggestions = document.getElementById('searchSuggestions');
const companySelect = document.getElementById('companySelect');
const productSelect = document.getElementById('productSelect');
const browseSearchBtn = document.getElementById('browseSearchBtn');
const resultsSection = document.getElementById('resultsSection');
const loading = document.getElementById('loading');
const error = document.getElementById('error');

// Initialize the application
document.addEventListener('DOMContentLoaded', async () => {
    console.log('Initializing ShouldaStocks...');
    
    try {
        await loadProducts();
        await loadCompanies();
        setupEventListeners();
        console.log('Application initialized successfully');
    } catch (err) {
        console.error('Failed to initialize application:', err);
        showError('Failed to load product data. Please refresh the page.');
    }
});

// Load all products from Supabase
async function loadProducts() {
    console.log('Loading products from Supabase...');
    
    try {
        const { data, error } = await supabase
            .from('product_table')
            .select('*')
            .order('release_date', { ascending: false });
        
        if (error) {
            console.error('Error loading products:', error);
            throw error;
        }
        
        allProducts = data || [];
        console.log(`Loaded ${allProducts.length} products`);
        
        // Create search suggestions
        updateSearchSuggestions();
        
    } catch (err) {
        console.error('Error loading products:', err);
        throw err;
    }
}

// Load companies from products
async function loadCompanies() {
    console.log('Loading companies...');
    
    try {
        const { data, error } = await supabase
            .from('product_table')
            .select('company_name')
            .not('company_name', 'is', null);
        
        if (error) {
            console.error('Error loading companies:', error);
            throw error;
        }
        
        // Get unique companies
        const uniqueCompanies = [...new Set(data.map(item => item.company_name))];
        companies = uniqueCompanies.sort();
        
        console.log(`Loaded ${companies.length} companies`);
        
        // Populate company dropdown
        populateCompanyDropdown();
        
    } catch (err) {
        console.error('Error loading companies:', err);
        throw err;
    }
}

// Populate company dropdown
function populateCompanyDropdown() {
    companySelect.innerHTML = '<option value="">Choose a company...</option>';
    
    companies.forEach(company => {
        const option = document.createElement('option');
        option.value = company;
        option.textContent = company;
        companySelect.appendChild(option);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    productSearch.addEventListener('input', handleSearchInput);
    searchBtn.addEventListener('click', handleSearch);
    productSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    // Browse functionality
    companySelect.addEventListener('change', handleCompanyChange);
    browseSearchBtn.addEventListener('click', handleBrowseSearch);
    
    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', handleTabSwitch);
    });
}

// Handle search input
function handleSearchInput() {
    const query = productSearch.value.toLowerCase().trim();
    
    if (query.length < 2) {
        searchSuggestions.innerHTML = '';
        return;
    }
    
    // Filter products based on query
    const matches = allProducts.filter(product => 
        product.product_id.toLowerCase().includes(query) ||
        (product.company_name && product.company_name.toLowerCase().includes(query))
    ).slice(0, 10);
    
    updateSearchSuggestions(matches);
}

// Update search suggestions
function updateSearchSuggestions(matches = []) {
    searchSuggestions.innerHTML = '';
    
    if (matches.length === 0) {
        return;
    }
    
    matches.forEach(product => {
        const suggestion = document.createElement('div');
        suggestion.className = 'suggestion-item';
        suggestion.innerHTML = `
            <div class="suggestion-name">${product.product_id.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</div>
            <div class="suggestion-company">${product.company_name || 'Unknown Company'}</div>
        `;
        
        suggestion.addEventListener('click', () => {
            productSearch.value = product.product_id;
            searchSuggestions.innerHTML = '';
            handleSearch();
        });
        
        searchSuggestions.appendChild(suggestion);
    });
}

// Handle search
async function handleSearch() {
    const query = productSearch.value.toLowerCase().trim();
    
    if (!query) {
        showError('Please enter a product name to search');
        return;
    }
    
    showLoading();
    hideError();
    
    try {
        // Search for products matching the query
        const matches = allProducts.filter(product => 
            product.product_id.toLowerCase().includes(query) ||
            (product.company_name && product.company_name.toLowerCase().includes(query))
        );
        
        if (matches.length === 0) {
            showError('No products found matching your search');
            return;
        }
        
        // Use the first match for now (you could show a selection dialog for multiple matches)
        const selectedProduct = matches[0];
        await analyzeProduct(selectedProduct);
        
    } catch (err) {
        console.error('Search error:', err);
        showError('An error occurred while searching. Please try again.');
    } finally {
        hideLoading();
    }
}

// Handle company change
function handleCompanyChange() {
    const selectedCompany = companySelect.value;
    
    if (!selectedCompany) {
        productSelect.innerHTML = '<option value="">First select a company</option>';
        productSelect.disabled = true;
        browseSearchBtn.disabled = true;
        return;
    }
    
    // Filter products by company
    const companyProducts = allProducts.filter(product => 
        product.company_name === selectedCompany
    );
    
    // Populate product dropdown
    productSelect.innerHTML = '<option value="">Select a product...</option>';
    companyProducts.forEach(product => {
        const option = document.createElement('option');
        option.value = product.product_id;
        option.textContent = product.product_id.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        productSelect.appendChild(option);
    });
    
    productSelect.disabled = false;
    browseSearchBtn.disabled = false;
}

// Handle browse search
async function handleBrowseSearch() {
    const selectedProductId = productSelect.value;
    
    if (!selectedProductId) {
        showError('Please select a product');
        return;
    }
    
    showLoading();
    hideError();
    
    try {
        const selectedProduct = allProducts.find(product => product.product_id === selectedProductId);
        
        if (!selectedProduct) {
            showError('Selected product not found');
            return;
        }
        
        await analyzeProduct(selectedProduct);
        
    } catch (err) {
        console.error('Browse search error:', err);
        showError('An error occurred while analyzing the product. Please try again.');
    } finally {
        hideLoading();
    }
}

// Handle tab switching
function handleTabSwitch(e) {
    const tab = e.target.dataset.tab;
    
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(tab + 'Tab').classList.add('active');
    
    // Clear search suggestions when switching tabs
    searchSuggestions.innerHTML = '';
}

// Analyze product investment potential
async function analyzeProduct(product) {
    console.log('Analyzing product:', product);
    
    try {
        // For now, we'll show basic product info
        // You can integrate with financial APIs later to get stock data
        
        displayProductResults(product);
        
    } catch (err) {
        console.error('Analysis error:', err);
        showError('Failed to analyze product investment potential');
    }
}

// Display product results
function displayProductResults(product) {
    // Update product info
    document.getElementById('productName').textContent = product.product_id.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    document.getElementById('productPrice').textContent = `$${product.price}`;
    document.getElementById('releaseDate').textContent = new Date(product.release_date).toLocaleDateString();
    document.getElementById('companyName').textContent = product.company_name || 'Unknown Company';
    
    // For now, show placeholder investment data
    // You can integrate with financial APIs to get real stock data
    document.getElementById('sharesPurchased').textContent = 'N/A';
    document.getElementById('currentValue').textContent = 'N/A';
    document.getElementById('totalReturn').textContent = 'N/A';
    document.getElementById('returnPercentage').textContent = 'N/A';
    
    // Show results section
    resultsSection.style.display = 'block';
    
    // Hide chart for now (you can implement this later)
    const chartContainer = document.querySelector('.chart-container');
    if (chartContainer) {
        chartContainer.innerHTML = '<p>Chart functionality coming soon...</p>';
    }
}

// Utility functions
function showLoading() {
    loading.style.display = 'block';
}

function hideLoading() {
    loading.style.display = 'none';
}

function showError(message) {
    document.getElementById('errorMessage').textContent = message;
    error.style.display = 'block';
}

function hideError() {
    error.style.display = 'none';
}

// Export functions for testing
window.ShouldaStocks = {
    loadProducts,
    loadCompanies,
    handleSearch,
    handleBrowseSearch,
    allProducts: () => allProducts,
    companies: () => companies
};
