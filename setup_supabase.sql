-- Create products table
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    key VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    release_date DATE NOT NULL,
    company VARCHAR(255) NOT NULL,
    symbol VARCHAR(10) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster searches
CREATE INDEX IF NOT EXISTS idx_products_company ON products(company);
CREATE INDEX IF NOT EXISTS idx_products_symbol ON products(symbol);
CREATE INDEX IF NOT EXISTS idx_products_release_date ON products(release_date);

-- Insert Apple Products - Comprehensive History
INSERT INTO products (key, name, price, release_date, company, symbol) VALUES
-- iPhone Series
('iphone 15 pro max', 'iPhone 15 Pro Max', 1199.00, '2023-09-22', 'Apple Inc.', 'AAPL'),
('iphone 15 pro', 'iPhone 15 Pro', 999.00, '2023-09-22', 'Apple Inc.', 'AAPL'),
('iphone 15 plus', 'iPhone 15 Plus', 899.00, '2023-09-22', 'Apple Inc.', 'AAPL'),
('iphone 15', 'iPhone 15', 799.00, '2023-09-22', 'Apple Inc.', 'AAPL'),
('iphone 14 pro max', 'iPhone 14 Pro Max', 1099.00, '2022-09-16', 'Apple Inc.', 'AAPL'),
('iphone 14 pro', 'iPhone 14 Pro', 999.00, '2022-09-16', 'Apple Inc.', 'AAPL'),
('iphone 14 plus', 'iPhone 14 Plus', 899.00, '2022-09-16', 'Apple Inc.', 'AAPL'),
('iphone 14', 'iPhone 14', 799.00, '2022-09-16', 'Apple Inc.', 'AAPL'),
('iphone 13 pro max', 'iPhone 13 Pro Max', 1099.00, '2021-09-24', 'Apple Inc.', 'AAPL'),
('iphone 13 pro', 'iPhone 13 Pro', 999.00, '2021-09-24', 'Apple Inc.', 'AAPL'),
('iphone 13', 'iPhone 13', 799.00, '2021-09-24', 'Apple Inc.', 'AAPL'),
('iphone 13 mini', 'iPhone 13 mini', 699.00, '2021-09-24', 'Apple Inc.', 'AAPL'),
('iphone 12 pro max', 'iPhone 12 Pro Max', 1099.00, '2020-11-13', 'Apple Inc.', 'AAPL'),
('iphone 12 pro', 'iPhone 12 Pro', 999.00, '2020-10-23', 'Apple Inc.', 'AAPL'),
('iphone 12', 'iPhone 12', 799.00, '2020-10-23', 'Apple Inc.', 'AAPL'),
('iphone 12 mini', 'iPhone 12 mini', 699.00, '2020-11-13', 'Apple Inc.', 'AAPL'),
('iphone 11 pro max', 'iPhone 11 Pro Max', 1099.00, '2019-09-20', 'Apple Inc.', 'AAPL'),
('iphone 11 pro', 'iPhone 11 Pro', 999.00, '2019-09-20', 'Apple Inc.', 'AAPL'),
('iphone 11', 'iPhone 11', 699.00, '2019-09-20', 'Apple Inc.', 'AAPL'),
('iphone xs max', 'iPhone XS Max', 1099.00, '2018-09-21', 'Apple Inc.', 'AAPL'),
('iphone xs', 'iPhone XS', 999.00, '2018-09-21', 'Apple Inc.', 'AAPL'),
('iphone xr', 'iPhone XR', 749.00, '2018-10-26', 'Apple Inc.', 'AAPL'),
('iphone x', 'iPhone X', 999.00, '2017-11-03', 'Apple Inc.', 'AAPL'),
('iphone 8 plus', 'iPhone 8 Plus', 799.00, '2017-09-22', 'Apple Inc.', 'AAPL'),
('iphone 8', 'iPhone 8', 699.00, '2017-09-22', 'Apple Inc.', 'AAPL'),
('iphone 7 plus', 'iPhone 7 Plus', 769.00, '2016-09-16', 'Apple Inc.', 'AAPL'),
('iphone 7', 'iPhone 7', 649.00, '2016-09-16', 'Apple Inc.', 'AAPL'),
('iphone 6s plus', 'iPhone 6s Plus', 749.00, '2015-09-25', 'Apple Inc.', 'AAPL'),
('iphone 6s', 'iPhone 6s', 649.00, '2015-09-25', 'Apple Inc.', 'AAPL'),
('iphone 6 plus', 'iPhone 6 Plus', 749.00, '2014-09-19', 'Apple Inc.', 'AAPL'),
('iphone 6', 'iPhone 6', 649.00, '2014-09-19', 'Apple Inc.', 'AAPL'),
('iphone 5s', 'iPhone 5s', 649.00, '2013-09-20', 'Apple Inc.', 'AAPL'),
('iphone 5c', 'iPhone 5c', 549.00, '2013-09-20', 'Apple Inc.', 'AAPL'),
('iphone 5', 'iPhone 5', 649.00, '2012-09-21', 'Apple Inc.', 'AAPL'),
('iphone 4s', 'iPhone 4s', 649.00, '2011-10-14', 'Apple Inc.', 'AAPL'),
('iphone 4', 'iPhone 4', 599.00, '2010-06-24', 'Apple Inc.', 'AAPL'),
('iphone 3gs', 'iPhone 3GS', 599.00, '2009-06-19', 'Apple Inc.', 'AAPL'),
('iphone 3g', 'iPhone 3G', 599.00, '2008-07-11', 'Apple Inc.', 'AAPL'),
('iphone', 'iPhone (Original)', 599.00, '2007-06-29', 'Apple Inc.', 'AAPL'),

-- MacBook Series
('macbook pro 16', 'MacBook Pro 16"', 2499.00, '2021-10-26', 'Apple Inc.', 'AAPL'),
('macbook pro 14', 'MacBook Pro 14"', 1999.00, '2021-10-26', 'Apple Inc.', 'AAPL'),
('macbook air m3', 'MacBook Air M3', 1099.00, '2024-03-08', 'Apple Inc.', 'AAPL'),
('macbook air m2', 'MacBook Air M2', 1199.00, '2022-07-15', 'Apple Inc.', 'AAPL'),
('macbook air m1', 'MacBook Air M1', 999.00, '2020-11-17', 'Apple Inc.', 'AAPL'),
('macbook pro 13 m2', 'MacBook Pro 13" M2', 1299.00, '2022-06-24', 'Apple Inc.', 'AAPL'),
('macbook pro 13 m1', 'MacBook Pro 13" M1', 1299.00, '2020-11-17', 'Apple Inc.', 'AAPL'),
('macbook air intel', 'MacBook Air Intel', 999.00, '2018-10-30', 'Apple Inc.', 'AAPL'),
('macbook pro 15', 'MacBook Pro 15"', 2399.00, '2016-10-27', 'Apple Inc.', 'AAPL'),
('macbook pro 13', 'MacBook Pro 13"', 1499.00, '2016-10-27', 'Apple Inc.', 'AAPL'),
('macbook', 'MacBook', 1299.00, '2015-04-10', 'Apple Inc.', 'AAPL'),

-- iPad Series
('ipad pro 12.9', 'iPad Pro 12.9"', 1099.00, '2022-10-26', 'Apple Inc.', 'AAPL'),
('ipad pro 11', 'iPad Pro 11"', 799.00, '2022-10-26', 'Apple Inc.', 'AAPL'),
('ipad air', 'iPad Air', 599.00, '2022-03-18', 'Apple Inc.', 'AAPL'),
('ipad', 'iPad', 449.00, '2022-10-26', 'Apple Inc.', 'AAPL'),
('ipad mini', 'iPad mini', 499.00, '2021-09-24', 'Apple Inc.', 'AAPL'),
('ipad pro 12.9 2021', 'iPad Pro 12.9" (2021)', 1099.00, '2021-05-21', 'Apple Inc.', 'AAPL'),
('ipad pro 11 2021', 'iPad Pro 11" (2021)', 799.00, '2021-05-21', 'Apple Inc.', 'AAPL'),
('ipad air 2020', 'iPad Air (2020)', 599.00, '2020-10-23', 'Apple Inc.', 'AAPL'),
('ipad 2020', 'iPad (2020)', 329.00, '2020-09-15', 'Apple Inc.', 'AAPL'),
('ipad mini 2019', 'iPad mini (2019)', 399.00, '2019-03-18', 'Apple Inc.', 'AAPL'),
('ipad air 2019', 'iPad Air (2019)', 499.00, '2019-03-18', 'Apple Inc.', 'AAPL'),
('ipad pro 12.9 2018', 'iPad Pro 12.9" (2018)', 999.00, '2018-11-07', 'Apple Inc.', 'AAPL'),
('ipad pro 11 2018', 'iPad Pro 11" (2018)', 799.00, '2018-11-07', 'Apple Inc.', 'AAPL'),
('ipad 2018', 'iPad (2018)', 329.00, '2018-03-27', 'Apple Inc.', 'AAPL'),
('ipad pro 12.9 2017', 'iPad Pro 12.9" (2017)', 799.00, '2017-06-13', 'Apple Inc.', 'AAPL'),
('ipad pro 10.5', 'iPad Pro 10.5"', 649.00, '2017-06-13', 'Apple Inc.', 'AAPL'),
('ipad 2017', 'iPad (2017)', 329.00, '2017-03-24', 'Apple Inc.', 'AAPL'),
('ipad pro 12.9 2015', 'iPad Pro 12.9" (2015)', 799.00, '2015-11-11', 'Apple Inc.', 'AAPL'),
('ipad pro 9.7', 'iPad Pro 9.7"', 599.00, '2016-03-31', 'Apple Inc.', 'AAPL'),
('ipad air 2', 'iPad Air 2', 499.00, '2014-10-22', 'Apple Inc.', 'AAPL'),
('ipad air', 'iPad Air', 499.00, '2013-11-01', 'Apple Inc.', 'AAPL'),
('ipad mini 3', 'iPad mini 3', 399.00, '2014-10-22', 'Apple Inc.', 'AAPL'),
('ipad mini 2', 'iPad mini 2', 399.00, '2013-11-12', 'Apple Inc.', 'AAPL'),
('ipad mini', 'iPad mini', 329.00, '2012-11-02', 'Apple Inc.', 'AAPL'),
('ipad 4', 'iPad (4th generation)', 499.00, '2012-11-02', 'Apple Inc.', 'AAPL'),
('ipad 3', 'iPad (3rd generation)', 499.00, '2012-03-16', 'Apple Inc.', 'AAPL'),
('ipad 2', 'iPad 2', 499.00, '2011-03-11', 'Apple Inc.', 'AAPL'),
('ipad', 'iPad (Original)', 499.00, '2010-04-03', 'Apple Inc.', 'AAPL'),

-- iPod Series - Historical Products
('ipod touch 7', 'iPod touch (7th generation)', 199.00, '2019-05-28', 'Apple Inc.', 'AAPL'),
('ipod touch 6', 'iPod touch (6th generation)', 199.00, '2015-07-15', 'Apple Inc.', 'AAPL'),
('ipod touch 5', 'iPod touch (5th generation)', 199.00, '2012-10-11', 'Apple Inc.', 'AAPL'),
('ipod touch 4', 'iPod touch (4th generation)', 229.00, '2010-09-08', 'Apple Inc.', 'AAPL'),
('ipod touch 3', 'iPod touch (3rd generation)', 199.00, '2009-09-09', 'Apple Inc.', 'AAPL'),
('ipod touch 2', 'iPod touch (2nd generation)', 229.00, '2008-09-09', 'Apple Inc.', 'AAPL'),
('ipod touch', 'iPod touch (Original)', 299.00, '2007-09-05', 'Apple Inc.', 'AAPL'),
('ipod classic 160gb', 'iPod Classic 160GB', 249.00, '2009-09-09', 'Apple Inc.', 'AAPL'),
('ipod classic 120gb', 'iPod Classic 120GB', 249.00, '2008-09-09', 'Apple Inc.', 'AAPL'),
('ipod classic 80gb', 'iPod Classic 80GB', 249.00, '2007-09-05', 'Apple Inc.', 'AAPL'),
('ipod classic 30gb', 'iPod Classic 30GB', 249.00, '2007-09-05', 'Apple Inc.', 'AAPL'),
('ipod classic', 'iPod Classic', 249.00, '2007-09-05', 'Apple Inc.', 'AAPL'),
('ipod video 60gb', 'iPod Video 60GB', 399.00, '2005-10-12', 'Apple Inc.', 'AAPL'),
('ipod video 30gb', 'iPod Video 30GB', 299.00, '2005-10-12', 'Apple Inc.', 'AAPL'),
('ipod video', 'iPod Video', 299.00, '2005-10-12', 'Apple Inc.', 'AAPL'),
('ipod photo 60gb', 'iPod Photo 60GB', 499.00, '2004-10-26', 'Apple Inc.', 'AAPL'),
('ipod photo 40gb', 'iPod Photo 40GB', 399.00, '2004-10-26', 'Apple Inc.', 'AAPL'),
('ipod photo', 'iPod Photo', 399.00, '2004-10-26', 'Apple Inc.', 'AAPL'),
('ipod mini 6gb', 'iPod mini 6GB', 249.00, '2004-02-20', 'Apple Inc.', 'AAPL'),
('ipod mini 4gb', 'iPod mini 4GB', 249.00, '2004-02-20', 'Apple Inc.', 'AAPL'),
('ipod mini', 'iPod mini', 249.00, '2004-02-20', 'Apple Inc.', 'AAPL'),
('ipod 3g 40gb', 'iPod (3rd generation) 40GB', 499.00, '2003-04-28', 'Apple Inc.', 'AAPL'),
('ipod 3g 30gb', 'iPod (3rd generation) 30GB', 399.00, '2003-04-28', 'Apple Inc.', 'AAPL'),
('ipod 3g 15gb', 'iPod (3rd generation) 15GB', 299.00, '2003-04-28', 'Apple Inc.', 'AAPL'),
('ipod 3g', 'iPod (3rd generation)', 299.00, '2003-04-28', 'Apple Inc.', 'AAPL'),
('ipod 2g 20gb', 'iPod (2nd generation) 20GB', 399.00, '2002-07-17', 'Apple Inc.', 'AAPL'),
('ipod 2g 10gb', 'iPod (2nd generation) 10GB', 299.00, '2002-07-17', 'Apple Inc.', 'AAPL'),
('ipod 2g', 'iPod (2nd generation)', 299.00, '2002-07-17', 'Apple Inc.', 'AAPL'),
('ipod 5gb', 'iPod (Original) 5GB', 399.00, '2001-10-23', 'Apple Inc.', 'AAPL'),
('ipod', 'iPod (Original)', 399.00, '2001-10-23', 'Apple Inc.', 'AAPL'),

-- Apple Watch Series
('apple watch ultra 2', 'Apple Watch Ultra 2', 799.00, '2023-09-22', 'Apple Inc.', 'AAPL'),
('apple watch series 9', 'Apple Watch Series 9', 399.00, '2023-09-22', 'Apple Inc.', 'AAPL'),
('apple watch se', 'Apple Watch SE', 249.00, '2022-09-16', 'Apple Inc.', 'AAPL'),
('apple watch ultra', 'Apple Watch Ultra', 799.00, '2022-09-23', 'Apple Inc.', 'AAPL'),
('apple watch series 8', 'Apple Watch Series 8', 399.00, '2022-09-23', 'Apple Inc.', 'AAPL'),
('apple watch series 7', 'Apple Watch Series 7', 399.00, '2021-10-15', 'Apple Inc.', 'AAPL'),
('apple watch series 6', 'Apple Watch Series 6', 399.00, '2020-09-18', 'Apple Inc.', 'AAPL'),
('apple watch se 2020', 'Apple Watch SE (2020)', 279.00, '2020-09-18', 'Apple Inc.', 'AAPL'),
('apple watch series 5', 'Apple Watch Series 5', 399.00, '2019-09-20', 'Apple Inc.', 'AAPL'),
('apple watch series 4', 'Apple Watch Series 4', 399.00, '2018-09-21', 'Apple Inc.', 'AAPL'),
('apple watch series 3', 'Apple Watch Series 3', 329.00, '2017-09-22', 'Apple Inc.', 'AAPL'),
('apple watch series 2', 'Apple Watch Series 2', 369.00, '2016-09-16', 'Apple Inc.', 'AAPL'),
('apple watch series 1', 'Apple Watch Series 1', 269.00, '2016-09-16', 'Apple Inc.', 'AAPL'),
('apple watch', 'Apple Watch (Original)', 349.00, '2015-04-24', 'Apple Inc.', 'AAPL'),

-- AirPods Series
('airpods pro 2', 'AirPods Pro 2nd Gen', 249.00, '2022-09-23', 'Apple Inc.', 'AAPL'),
('airpods 3', 'AirPods 3rd Gen', 179.00, '2021-10-26', 'Apple Inc.', 'AAPL'),
('airpods max', 'AirPods Max', 549.00, '2020-12-15', 'Apple Inc.', 'AAPL'),
('airpods pro', 'AirPods Pro', 249.00, '2019-10-30', 'Apple Inc.', 'AAPL'),
('airpods 2', 'AirPods 2nd Gen', 159.00, '2019-03-20', 'Apple Inc.', 'AAPL'),
('airpods', 'AirPods (Original)', 159.00, '2016-12-13', 'Apple Inc.', 'AAPL'),

-- Mac Desktop Series
('imac 24', 'iMac 24"', 1299.00, '2021-05-21', 'Apple Inc.', 'AAPL'),
('imac 27', 'iMac 27"', 1799.00, '2020-08-04', 'Apple Inc.', 'AAPL'),
('mac studio', 'Mac Studio', 1999.00, '2022-03-18', 'Apple Inc.', 'AAPL'),
('mac pro', 'Mac Pro', 5999.00, '2019-12-10', 'Apple Inc.', 'AAPL'),
('mac mini m2', 'Mac mini M2', 599.00, '2023-01-24', 'Apple Inc.', 'AAPL'),
('mac mini m1', 'Mac mini M1', 699.00, '2020-11-17', 'Apple Inc.', 'AAPL'),

-- Tesla Products
('tesla model s plaid', 'Tesla Model S Plaid', 108990.00, '2021-06-10', 'Tesla Inc.', 'TSLA'),
('tesla model s', 'Tesla Model S', 74990.00, '2012-06-22', 'Tesla Inc.', 'TSLA'),
('tesla model x plaid', 'Tesla Model X Plaid', 108990.00, '2021-06-10', 'Tesla Inc.', 'TSLA'),
('tesla model x', 'Tesla Model X', 79990.00, '2015-09-29', 'Tesla Inc.', 'TSLA'),
('tesla model y performance', 'Tesla Model Y Performance', 52490.00, '2020-03-15', 'Tesla Inc.', 'TSLA'),
('tesla model y', 'Tesla Model Y', 47740.00, '2020-03-15', 'Tesla Inc.', 'TSLA'),
('tesla model 3 performance', 'Tesla Model 3 Performance', 50990.00, '2017-07-28', 'Tesla Inc.', 'TSLA'),
('tesla model 3', 'Tesla Model 3', 38990.00, '2017-07-28', 'Tesla Inc.', 'TSLA'),
('tesla cybertruck', 'Tesla Cybertruck', 60890.00, '2023-11-30', 'Tesla Inc.', 'TSLA'),

-- Microsoft Products
('surface laptop studio 2', 'Surface Laptop Studio 2', 1999.00, '2023-10-03', 'Microsoft Corporation', 'MSFT'),
('surface laptop 5', 'Surface Laptop 5', 999.00, '2022-10-25', 'Microsoft Corporation', 'MSFT'),
('surface pro 9', 'Surface Pro 9', 1099.00, '2022-10-25', 'Microsoft Corporation', 'MSFT'),
('surface studio 2', 'Surface Studio 2', 3499.00, '2018-10-02', 'Microsoft Corporation', 'MSFT'),
('xbox series x', 'Xbox Series X', 499.00, '2020-11-10', 'Microsoft Corporation', 'MSFT'),
('xbox series s', 'Xbox Series S', 299.00, '2020-11-10', 'Microsoft Corporation', 'MSFT'),
('xbox one x', 'Xbox One X', 499.00, '2017-11-07', 'Microsoft Corporation', 'MSFT'),

-- Sony Products
('playstation 5', 'PlayStation 5', 499.00, '2020-11-12', 'Sony Group Corporation', 'SONY'),
('playstation 5 digital', 'PlayStation 5 Digital Edition', 399.00, '2020-11-12', 'Sony Group Corporation', 'SONY'),
('playstation 4 pro', 'PlayStation 4 Pro', 399.00, '2016-11-10', 'Sony Group Corporation', 'SONY'),
('playstation vr2', 'PlayStation VR2', 549.00, '2023-02-22', 'Sony Group Corporation', 'SONY'),
('sony wh-1000xm5', 'Sony WH-1000XM5 Headphones', 399.00, '2022-05-12', 'Sony Group Corporation', 'SONY'),
('sony a7r v', 'Sony A7R V Camera', 3898.00, '2022-10-26', 'Sony Group Corporation', 'SONY'),
('sony a7 iv', 'Sony A7 IV Camera', 2498.00, '2021-10-21', 'Sony Group Corporation', 'SONY'),

-- Nintendo Products
('nintendo switch oled', 'Nintendo Switch OLED', 349.00, '2021-10-08', 'Nintendo Co., Ltd.', 'NTDOY'),
('nintendo switch', 'Nintendo Switch', 299.00, '2017-03-03', 'Nintendo Co., Ltd.', 'NTDOY'),
('nintendo switch lite', 'Nintendo Switch Lite', 199.00, '2019-09-20', 'Nintendo Co., Ltd.', 'NTDOY'),

-- NVIDIA Products
('nvidia rtx 4090', 'NVIDIA GeForce RTX 4090', 1599.00, '2022-10-12', 'NVIDIA Corporation', 'NVDA'),
('nvidia rtx 4080', 'NVIDIA GeForce RTX 4080', 1199.00, '2022-11-16', 'NVIDIA Corporation', 'NVDA'),
('nvidia rtx 4070', 'NVIDIA GeForce RTX 4070', 599.00, '2023-04-13', 'NVIDIA Corporation', 'NVDA'),
('nvidia rtx 3090', 'NVIDIA GeForce RTX 3090', 1499.00, '2020-09-24', 'NVIDIA Corporation', 'NVDA'),
('nvidia rtx 3080', 'NVIDIA GeForce RTX 3080', 699.00, '2020-09-17', 'NVIDIA Corporation', 'NVDA'),

-- AMD Products
('amd ryzen 9 7950x', 'AMD Ryzen 9 7950X', 699.00, '2022-09-27', 'Advanced Micro Devices', 'AMD'),
('amd ryzen 7 7700x', 'AMD Ryzen 7 7700X', 399.00, '2022-09-27', 'Advanced Micro Devices', 'AMD'),
('amd ryzen 5 7600x', 'AMD Ryzen 5 7600X', 299.00, '2022-09-27', 'Advanced Micro Devices', 'AMD'),

-- Samsung Products
('samsung galaxy s24 ultra', 'Samsung Galaxy S24 Ultra', 1299.00, '2024-01-17', 'Samsung Electronics', 'SSNLF'),
('samsung galaxy s24 plus', 'Samsung Galaxy S24 Plus', 999.00, '2024-01-17', 'Samsung Electronics', 'SSNLF'),
('samsung galaxy s24', 'Samsung Galaxy S24', 799.00, '2024-01-17', 'Samsung Electronics', 'SSNLF'),
('samsung galaxy s23 ultra', 'Samsung Galaxy S23 Ultra', 1199.00, '2023-02-17', 'Samsung Electronics', 'SSNLF'),
('samsung galaxy s23 plus', 'Samsung Galaxy S23 Plus', 999.00, '2023-02-17', 'Samsung Electronics', 'SSNLF'),
('samsung galaxy s23', 'Samsung Galaxy S23', 799.00, '2023-02-17', 'Samsung Electronics', 'SSNLF'),
('samsung galaxy z fold 5', 'Samsung Galaxy Z Fold 5', 1799.00, '2023-08-11', 'Samsung Electronics', 'SSNLF'),
('samsung galaxy z flip 5', 'Samsung Galaxy Z Flip 5', 999.00, '2023-08-11', 'Samsung Electronics', 'SSNLF'),

-- Google Products
('google pixel 8 pro', 'Google Pixel 8 Pro', 999.00, '2023-10-12', 'Alphabet Inc.', 'GOOGL'),
('google pixel 8', 'Google Pixel 8', 699.00, '2023-10-12', 'Alphabet Inc.', 'GOOGL'),
('google pixel 7 pro', 'Google Pixel 7 Pro', 899.00, '2022-10-13', 'Alphabet Inc.', 'GOOGL'),
('google pixel 7', 'Google Pixel 7', 599.00, '2022-10-13', 'Alphabet Inc.', 'GOOGL'),
('google pixel watch 2', 'Google Pixel Watch 2', 349.00, '2023-10-12', 'Alphabet Inc.', 'GOOGL'),
('google pixel buds pro', 'Google Pixel Buds Pro', 199.00, '2022-07-28', 'Alphabet Inc.', 'GOOGL'),

-- Meta Products
('meta quest 3', 'Meta Quest 3', 499.00, '2023-10-10', 'Meta Platforms Inc.', 'META'),
('meta quest 2', 'Meta Quest 2', 299.00, '2020-10-13', 'Meta Platforms Inc.', 'META'),
('meta quest pro', 'Meta Quest Pro', 1499.00, '2022-10-25', 'Meta Platforms Inc.', 'META'),
('meta ray-ban stories', 'Meta Ray-Ban Stories', 299.00, '2021-09-09', 'Meta Platforms Inc.', 'META'),

-- Nike Products
('nike air jordan 1', 'Nike Air Jordan 1', 170.00, '1985-04-01', 'Nike Inc.', 'NKE'),
('nike air max 270', 'Nike Air Max 270', 150.00, '2018-02-01', 'Nike Inc.', 'NKE'),
('nike air force 1', 'Nike Air Force 1', 90.00, '1982-01-01', 'Nike Inc.', 'NKE'),
('nike dunk low', 'Nike Dunk Low', 100.00, '1985-01-01', 'Nike Inc.', 'NKE'),
('nike react element 55', 'Nike React Element 55', 130.00, '2018-06-01', 'Nike Inc.', 'NKE'),

-- Adidas Products
('adidas yeezy boost 350', 'Adidas Yeezy Boost 350', 220.00, '2015-06-27', 'Adidas AG', 'ADDYY'),
('adidas ultraboost 22', 'Adidas Ultraboost 22', 190.00, '2022-01-01', 'Adidas AG', 'ADDYY'),
('adidas stan smith', 'Adidas Stan Smith', 80.00, '1965-01-01', 'Adidas AG', 'ADDYY'),
('adidas nmd r1', 'Adidas NMD R1', 130.00, '2015-12-10', 'Adidas AG', 'ADDYY'),

-- Converse Products
('converse chuck taylor all star', 'Converse Chuck Taylor All Star', 60.00, '1917-01-01', 'Nike Inc.', 'NKE'),
('converse one star', 'Converse One Star', 70.00, '1974-01-01', 'Nike Inc.', 'NKE'),

-- Automotive Companies
('bmw 3 series', 'BMW 3 Series', 41450.00, '2019-03-01', 'Bayerische Motoren Werke AG', 'BMWYY'),
('bmw x5', 'BMW X5', 60100.00, '2019-06-01', 'Bayerische Motoren Werke AG', 'BMWYY'),
('bmw i4', 'BMW i4', 55400.00, '2022-03-01', 'Bayerische Motoren Werke AG', 'BMWYY'),
('mercedes c class', 'Mercedes-Benz C-Class', 43550.00, '2021-02-23', 'Mercedes-Benz Group AG', 'MBGYY'),
('mercedes e class', 'Mercedes-Benz E-Class', 55400.00, '2021-02-23', 'Mercedes-Benz Group AG', 'MBGYY'),
('mercedes s class', 'Mercedes-Benz S-Class', 111000.00, '2021-02-23', 'Mercedes-Benz Group AG', 'MBGYY'),
('audi a4', 'Audi A4', 39500.00, '2017-01-01', 'Volkswagen AG', 'VWAGY'),
('audi q5', 'Audi Q5', 43200.00, '2017-01-01', 'Volkswagen AG', 'VWAGY'),
('audi etron', 'Audi e-tron', 65800.00, '2019-04-01', 'Volkswagen AG', 'VWAGY'),

-- Ford Products
('ford f-150', 'Ford F-150', 28490.00, '2021-01-01', 'Ford Motor Company', 'F'),
('ford mustang mach-e', 'Ford Mustang Mach-E', 42895.00, '2021-01-01', 'Ford Motor Company', 'F'),
('ford bronco', 'Ford Bronco', 28500.00, '2021-06-01', 'Ford Motor Company', 'F'),

-- General Motors Products
('chevrolet silverado', 'Chevrolet Silverado', 28900.00, '2019-01-01', 'General Motors Company', 'GM'),
('chevrolet bolt euv', 'Chevrolet Bolt EUV', 33995.00, '2022-01-01', 'General Motors Company', 'GM'),
('cadillac lyriq', 'Cadillac Lyriq', 59990.00, '2022-01-01', 'General Motors Company', 'GM'),

-- Home & Lifestyle
('dyson v15 detect', 'Dyson V15 Detect Vacuum', 749.00, '2021-03-01', 'Dyson Ltd.', 'DYSON'),
('dyson airwrap', 'Dyson Airwrap', 549.00, '2018-10-01', 'Dyson Ltd.', 'DYSON'),
('dyson supersonic', 'Dyson Supersonic Hair Dryer', 399.00, '2016-04-01', 'Dyson Ltd.', 'DYSON'),

-- Kitchen Appliances
('vitamix a3500', 'Vitamix A3500 Blender', 599.00, '2019-01-01', 'Vitamix Corporation', 'VITAMIX'),
('kitchenaid stand mixer', 'KitchenAid Stand Mixer', 379.00, '1919-01-01', 'Whirlpool Corporation', 'WHR'),
('instant pot duo', 'Instant Pot Duo', 99.00, '2010-01-01', 'Instant Brands Inc.', 'INSTANT'),

-- Furniture & Home
('herman miller aeron', 'Herman Miller Aeron Chair', 1445.00, '1994-01-01', 'Herman Miller Inc.', 'MLHR'),
('ikea hemnes', 'IKEA Hemnes Dresser', 199.00, '2000-01-01', 'Inter IKEA Group', 'IKEA'),

-- Beauty & Personal Care
('foreo luna 3', 'FOREO Luna 3', 199.00, '2019-01-01', 'FOREO AB', 'FOREO'),

-- Outdoor & Sports
('peloton bike', 'Peloton Bike', 1445.00, '2014-01-01', 'Peloton Interactive Inc.', 'PTON'),
('peloton bike plus', 'Peloton Bike+', 2495.00, '2020-09-01', 'Peloton Interactive Inc.', 'PTON'),
('peloton tread', 'Peloton Tread', 2495.00, '2018-01-01', 'Peloton Interactive Inc.', 'PTON'),

-- Gaming & Entertainment
('steam deck', 'Steam Deck', 399.00, '2022-02-25', 'Valve Corporation', 'VALVE'),
('oculus quest 2', 'Oculus Quest 2', 299.00, '2020-10-13', 'Meta Platforms Inc.', 'META')
ON CONFLICT (key) DO UPDATE SET
    name = EXCLUDED.name,
    price = EXCLUDED.price,
    release_date = EXCLUDED.release_date,
    company = EXCLUDED.company,
    symbol = EXCLUDED.symbol,
    updated_at = NOW();

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
