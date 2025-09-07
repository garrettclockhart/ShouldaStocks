const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

// Supabase configuration
const SUPABASE_URL = 'https://viwmgaptepnldhdymkzg.supabase.co';
const SUPABASE_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpd21nYXB0ZXBubGRoZHlta3pnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NzIxODYxOCwiZXhwIjoyMDcyNzk0NjE4fQ.Sd8f5Gi4CegIrmPbKKCgMQEMRNnHaVHvvw1zIVwES0E';

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// Comprehensive Apple Products Database - All products since iPhone
const appleProducts = [
    // iPhone Series (2007-2024)
    { product_id: 'iphone_original', product_name: 'iPhone (Original)', price: 599, release_date: '2007-06-29', company_name: 'Apple Inc.' },
    { product_id: 'iphone_3g', product_name: 'iPhone 3G', price: 599, release_date: '2008-07-11', company_name: 'Apple Inc.' },
    { product_id: 'iphone_3gs', product_name: 'iPhone 3GS', price: 599, release_date: '2009-06-19', company_name: 'Apple Inc.' },
    { product_id: 'iphone_4', product_name: 'iPhone 4', price: 599, release_date: '2010-06-24', company_name: 'Apple Inc.' },
    { product_id: 'iphone_4s', product_name: 'iPhone 4S', price: 649, release_date: '2011-10-14', company_name: 'Apple Inc.' },
    { product_id: 'iphone_5', product_name: 'iPhone 5', price: 649, release_date: '2012-09-21', company_name: 'Apple Inc.' },
    { product_id: 'iphone_5c', product_name: 'iPhone 5c', price: 549, release_date: '2013-09-20', company_name: 'Apple Inc.' },
    { product_id: 'iphone_5s', product_name: 'iPhone 5s', price: 649, release_date: '2013-09-20', company_name: 'Apple Inc.' },
    { product_id: 'iphone_6', product_name: 'iPhone 6', price: 649, release_date: '2014-09-19', company_name: 'Apple Inc.' },
    { product_id: 'iphone_6_plus', product_name: 'iPhone 6 Plus', price: 749, release_date: '2014-09-19', company_name: 'Apple Inc.' },
    { product_id: 'iphone_6s', product_name: 'iPhone 6s', price: 649, release_date: '2015-09-25', company_name: 'Apple Inc.' },
    { product_id: 'iphone_6s_plus', product_name: 'iPhone 6s Plus', price: 749, release_date: '2015-09-25', company_name: 'Apple Inc.' },
    { product_id: 'iphone_se_1st', product_name: 'iPhone SE (1st generation)', price: 399, release_date: '2016-03-31', company_name: 'Apple Inc.' },
    { product_id: 'iphone_7', product_name: 'iPhone 7', price: 649, release_date: '2016-09-16', company_name: 'Apple Inc.' },
    { product_id: 'iphone_7_plus', product_name: 'iPhone 7 Plus', price: 769, release_date: '2016-09-16', company_name: 'Apple Inc.' },
    { product_id: 'iphone_8', product_name: 'iPhone 8', price: 699, release_date: '2017-09-22', company_name: 'Apple Inc.' },
    { product_id: 'iphone_8_plus', product_name: 'iPhone 8 Plus', price: 799, release_date: '2017-09-22', company_name: 'Apple Inc.' },
    { product_id: 'iphone_x', product_name: 'iPhone X', price: 999, release_date: '2017-11-03', company_name: 'Apple Inc.' },
    { product_id: 'iphone_xr', product_name: 'iPhone XR', price: 749, release_date: '2018-10-26', company_name: 'Apple Inc.' },
    { product_id: 'iphone_xs', product_name: 'iPhone XS', price: 999, release_date: '2018-09-21', company_name: 'Apple Inc.' },
    { product_id: 'iphone_xs_max', product_name: 'iPhone XS Max', price: 1099, release_date: '2018-09-21', company_name: 'Apple Inc.' },
    { product_id: 'iphone_11', product_name: 'iPhone 11', price: 699, release_date: '2019-09-20', company_name: 'Apple Inc.' },
    { product_id: 'iphone_11_pro', product_name: 'iPhone 11 Pro', price: 999, release_date: '2019-09-20', company_name: 'Apple Inc.' },
    { product_id: 'iphone_11_pro_max', product_name: 'iPhone 11 Pro Max', price: 1099, release_date: '2019-09-20', company_name: 'Apple Inc.' },
    { product_id: 'iphone_se_2nd', product_name: 'iPhone SE (2nd generation)', price: 399, release_date: '2020-04-24', company_name: 'Apple Inc.' },
    { product_id: 'iphone_12_mini', product_name: 'iPhone 12 mini', price: 699, release_date: '2020-11-13', company_name: 'Apple Inc.' },
    { product_id: 'iphone_12', product_name: 'iPhone 12', price: 799, release_date: '2020-10-23', company_name: 'Apple Inc.' },
    { product_id: 'iphone_12_pro', product_name: 'iPhone 12 Pro', price: 999, release_date: '2020-10-23', company_name: 'Apple Inc.' },
    { product_id: 'iphone_12_pro_max', product_name: 'iPhone 12 Pro Max', price: 1099, release_date: '2020-11-13', company_name: 'Apple Inc.' },
    { product_id: 'iphone_13_mini', product_name: 'iPhone 13 mini', price: 699, release_date: '2021-09-24', company_name: 'Apple Inc.' },
    { product_id: 'iphone_13', product_name: 'iPhone 13', price: 799, release_date: '2021-09-24', company_name: 'Apple Inc.' },
    { product_id: 'iphone_13_pro', product_name: 'iPhone 13 Pro', price: 999, release_date: '2021-09-24', company_name: 'Apple Inc.' },
    { product_id: 'iphone_13_pro_max', product_name: 'iPhone 13 Pro Max', price: 1099, release_date: '2021-09-24', company_name: 'Apple Inc.' },
    { product_id: 'iphone_se_3rd', product_name: 'iPhone SE (3rd generation)', price: 429, release_date: '2022-03-18', company_name: 'Apple Inc.' },
    { product_id: 'iphone_14', product_name: 'iPhone 14', price: 799, release_date: '2022-09-16', company_name: 'Apple Inc.' },
    { product_id: 'iphone_14_plus', product_name: 'iPhone 14 Plus', price: 899, release_date: '2022-09-16', company_name: 'Apple Inc.' },
    { product_id: 'iphone_14_pro', product_name: 'iPhone 14 Pro', price: 999, release_date: '2022-09-16', company_name: 'Apple Inc.' },
    { product_id: 'iphone_14_pro_max', product_name: 'iPhone 14 Pro Max', price: 1099, release_date: '2022-09-16', company_name: 'Apple Inc.' },
    { product_id: 'iphone_15', product_name: 'iPhone 15', price: 799, release_date: '2023-09-22', company_name: 'Apple Inc.' },
    { product_id: 'iphone_15_plus', product_name: 'iPhone 15 Plus', price: 899, release_date: '2023-09-22', company_name: 'Apple Inc.' },
    { product_id: 'iphone_15_pro', product_name: 'iPhone 15 Pro', price: 999, release_date: '2023-09-22', company_name: 'Apple Inc.' },
    { product_id: 'iphone_15_pro_max', product_name: 'iPhone 15 Pro Max', price: 1199, release_date: '2023-09-22', company_name: 'Apple Inc.' },
    
    // iPad Series (2010-2024)
    { product_id: 'ipad_original', product_name: 'iPad (Original)', price: 499, release_date: '2010-04-03', company_name: 'Apple Inc.' },
    { product_id: 'ipad_2', product_name: 'iPad 2', price: 499, release_date: '2011-03-11', company_name: 'Apple Inc.' },
    { product_id: 'ipad_3', product_name: 'iPad (3rd generation)', price: 499, release_date: '2012-03-16', company_name: 'Apple Inc.' },
    { product_id: 'ipad_4', product_name: 'iPad (4th generation)', price: 499, release_date: '2012-11-02', company_name: 'Apple Inc.' },
    { product_id: 'ipad_mini', product_name: 'iPad mini', price: 329, release_date: '2012-11-02', company_name: 'Apple Inc.' },
    { product_id: 'ipad_mini_2', product_name: 'iPad mini 2', price: 399, release_date: '2013-11-12', company_name: 'Apple Inc.' },
    { product_id: 'ipad_mini_3', product_name: 'iPad mini 3', price: 399, release_date: '2014-10-22', company_name: 'Apple Inc.' },
    { product_id: 'ipad_air', product_name: 'iPad Air', price: 499, release_date: '2013-11-01', company_name: 'Apple Inc.' },
    { product_id: 'ipad_air_2', product_name: 'iPad Air 2', price: 499, release_date: '2014-10-22', company_name: 'Apple Inc.' },
    { product_id: 'ipad_pro_12_9_2015', product_name: 'iPad Pro 12.9" (2015)', price: 799, release_date: '2015-11-11', company_name: 'Apple Inc.' },
    { product_id: 'ipad_pro_9_7', product_name: 'iPad Pro 9.7"', price: 599, release_date: '2016-03-31', company_name: 'Apple Inc.' },
    { product_id: 'ipad_2017', product_name: 'iPad (2017)', price: 329, release_date: '2017-03-24', company_name: 'Apple Inc.' },
    { product_id: 'ipad_pro_10_5', product_name: 'iPad Pro 10.5"', price: 649, release_date: '2017-06-13', company_name: 'Apple Inc.' },
    { product_id: 'ipad_pro_12_9_2017', product_name: 'iPad Pro 12.9" (2017)', price: 799, release_date: '2017-06-13', company_name: 'Apple Inc.' },
    { product_id: 'ipad_2018', product_name: 'iPad (2018)', price: 329, release_date: '2018-03-27', company_name: 'Apple Inc.' },
    { product_id: 'ipad_pro_11_2018', product_name: 'iPad Pro 11" (2018)', price: 799, release_date: '2018-11-07', company_name: 'Apple Inc.' },
    { product_id: 'ipad_pro_12_9_2018', product_name: 'iPad Pro 12.9" (2018)', price: 999, release_date: '2018-11-07', company_name: 'Apple Inc.' },
    { product_id: 'ipad_mini_2019', product_name: 'iPad mini (2019)', price: 399, release_date: '2019-03-18', company_name: 'Apple Inc.' },
    { product_id: 'ipad_air_2019', product_name: 'iPad Air (2019)', price: 499, release_date: '2019-03-18', company_name: 'Apple Inc.' },
    { product_id: 'ipad_2020', product_name: 'iPad (2020)', price: 329, release_date: '2020-09-15', company_name: 'Apple Inc.' },
    { product_id: 'ipad_air_2020', product_name: 'iPad Air (2020)', price: 599, release_date: '2020-10-23', company_name: 'Apple Inc.' },
    { product_id: 'ipad_pro_11_2021', product_name: 'iPad Pro 11" (2021)', price: 799, release_date: '2021-05-21', company_name: 'Apple Inc.' },
    { product_id: 'ipad_pro_12_9_2021', product_name: 'iPad Pro 12.9" (2021)', price: 1099, release_date: '2021-05-21', company_name: 'Apple Inc.' },
    { product_id: 'ipad_mini_2021', product_name: 'iPad mini (2021)', price: 499, release_date: '2021-09-24', company_name: 'Apple Inc.' },
    { product_id: 'ipad_2022', product_name: 'iPad (2022)', price: 449, release_date: '2022-10-26', company_name: 'Apple Inc.' },
    { product_id: 'ipad_air_2022', product_name: 'iPad Air (2022)', price: 599, release_date: '2022-03-18', company_name: 'Apple Inc.' },
    { product_id: 'ipad_pro_11_2022', product_name: 'iPad Pro 11" (2022)', price: 799, release_date: '2022-10-26', company_name: 'Apple Inc.' },
    { product_id: 'ipad_pro_12_9_2022', product_name: 'iPad Pro 12.9" (2022)', price: 1099, release_date: '2022-10-26', company_name: 'Apple Inc.' },
    
    // MacBook Series (2006-2024)
    { product_id: 'macbook_pro_15_2006', product_name: 'MacBook Pro 15" (2006)', price: 1999, release_date: '2006-01-10', company_name: 'Apple Inc.' },
    { product_id: 'macbook_pro_17_2006', product_name: 'MacBook Pro 17" (2006)', price: 2799, release_date: '2006-01-10', company_name: 'Apple Inc.' },
    { product_id: 'macbook_air_2008', product_name: 'MacBook Air (2008)', price: 1799, release_date: '2008-01-15', company_name: 'Apple Inc.' },
    { product_id: 'macbook_pro_13_2009', product_name: 'MacBook Pro 13" (2009)', price: 1199, release_date: '2009-06-08', company_name: 'Apple Inc.' },
    { product_id: 'macbook_pro_15_2012', product_name: 'MacBook Pro 15" (2012)', price: 1799, release_date: '2012-06-11', company_name: 'Apple Inc.' },
    { product_id: 'macbook_pro_13_2012', product_name: 'MacBook Pro 13" (2012)', price: 1199, release_date: '2012-06-11', company_name: 'Apple Inc.' },
    { product_id: 'macbook_pro_retina_15', product_name: 'MacBook Pro 15" Retina', price: 2199, release_date: '2012-06-11', company_name: 'Apple Inc.' },
    { product_id: 'macbook_pro_retina_13', product_name: 'MacBook Pro 13" Retina', price: 1699, release_date: '2012-10-23', company_name: 'Apple Inc.' },
    { product_id: 'macbook_air_2013', product_name: 'MacBook Air (2013)', price: 999, release_date: '2013-06-10', company_name: 'Apple Inc.' },
    { product_id: 'macbook_pro_15_2013', product_name: 'MacBook Pro 15" (2013)', price: 1999, release_date: '2013-10-22', company_name: 'Apple Inc.' },
    { product_id: 'macbook_pro_13_2013', product_name: 'MacBook Pro 13" (2013)', price: 1299, release_date: '2013-10-22', company_name: 'Apple Inc.' },
    { product_id: 'macbook_air_2014', product_name: 'MacBook Air (2014)', price: 899, release_date: '2014-04-29', company_name: 'Apple Inc.' },
    { product_id: 'macbook_pro_15_2015', product_name: 'MacBook Pro 15" (2015)', price: 1999, release_date: '2015-05-19', company_name: 'Apple Inc.' },
    { product_id: 'macbook_pro_13_2015', product_name: 'MacBook Pro 13" (2015)', price: 1299, release_date: '2015-05-19', company_name: 'Apple Inc.' },
    { product_id: 'macbook_2015', product_name: 'MacBook (2015)', price: 1299, release_date: '2015-04-10', company_name: 'Apple Inc.' },
    { product_id: 'macbook_pro_15_2016', product_name: 'MacBook Pro 15" (2016)', price: 2399, release_date: '2016-10-27', company_name: 'Apple Inc.' },
    { product_id: 'macbook_pro_13_2016', product_name: 'MacBook Pro 13" (2016)', price: 1499, release_date: '2016-10-27', company_name: 'Apple Inc.' },
    { product_id: 'macbook_pro_15_2017', product_name: 'MacBook Pro 15" (2017)', price: 2399, release_date: '2017-06-05', company_name: 'Apple Inc.' },
    { product_id: 'macbook_pro_13_2017', product_name: 'MacBook Pro 13" (2017)', price: 1299, release_date: '2017-06-05', company_name: 'Apple Inc.' },
    { product_id: 'macbook_air_2018', product_name: 'MacBook Air (2018)', price: 1199, release_date: '2018-10-30', company_name: 'Apple Inc.' },
    { product_id: 'macbook_pro_15_2019', product_name: 'MacBook Pro 15" (2019)', price: 2399, release_date: '2019-05-21', company_name: 'Apple Inc.' },
    { product_id: 'macbook_pro_13_2019', product_name: 'MacBook Pro 13" (2019)', price: 1799, release_date: '2019-05-21', company_name: 'Apple Inc.' },
    { product_id: 'macbook_pro_16_2019', product_name: 'MacBook Pro 16" (2019)', price: 2399, release_date: '2019-11-13', company_name: 'Apple Inc.' },
    { product_id: 'macbook_air_m1', product_name: 'MacBook Air M1', price: 999, release_date: '2020-11-17', company_name: 'Apple Inc.' },
    { product_id: 'macbook_pro_13_m1', product_name: 'MacBook Pro 13" M1', price: 1299, release_date: '2020-11-17', company_name: 'Apple Inc.' },
    { product_id: 'macbook_pro_14_m1', product_name: 'MacBook Pro 14" M1', price: 1999, release_date: '2021-10-26', company_name: 'Apple Inc.' },
    { product_id: 'macbook_pro_16_m1', product_name: 'MacBook Pro 16" M1', price: 2499, release_date: '2021-10-26', company_name: 'Apple Inc.' },
    { product_id: 'macbook_air_m2', product_name: 'MacBook Air M2', price: 1199, release_date: '2022-07-15', company_name: 'Apple Inc.' },
    { product_id: 'macbook_pro_13_m2', product_name: 'MacBook Pro 13" M2', price: 1299, release_date: '2022-06-24', company_name: 'Apple Inc.' },
    { product_id: 'macbook_air_m3', product_name: 'MacBook Air M3', price: 1099, release_date: '2024-03-08', company_name: 'Apple Inc.' },
    { product_id: 'macbook_pro_14_m3', product_name: 'MacBook Pro 14" M3', price: 1599, release_date: '2023-10-30', company_name: 'Apple Inc.' },
    { product_id: 'macbook_pro_16_m3', product_name: 'MacBook Pro 16" M3', price: 2499, release_date: '2023-10-30', company_name: 'Apple Inc.' },
    
    // Apple Watch Series (2015-2024)
    { product_id: 'apple_watch_original', product_name: 'Apple Watch (Original)', price: 349, release_date: '2015-04-24', company_name: 'Apple Inc.' },
    { product_id: 'apple_watch_series_1', product_name: 'Apple Watch Series 1', price: 269, release_date: '2016-09-16', company_name: 'Apple Inc.' },
    { product_id: 'apple_watch_series_2', product_name: 'Apple Watch Series 2', price: 369, release_date: '2016-09-16', company_name: 'Apple Inc.' },
    { product_id: 'apple_watch_series_3', product_name: 'Apple Watch Series 3', price: 329, release_date: '2017-09-22', company_name: 'Apple Inc.' },
    { product_id: 'apple_watch_series_4', product_name: 'Apple Watch Series 4', price: 399, release_date: '2018-09-21', company_name: 'Apple Inc.' },
    { product_id: 'apple_watch_series_5', product_name: 'Apple Watch Series 5', price: 399, release_date: '2019-09-20', company_name: 'Apple Inc.' },
    { product_id: 'apple_watch_se_2020', product_name: 'Apple Watch SE (2020)', price: 279, release_date: '2020-09-18', company_name: 'Apple Inc.' },
    { product_id: 'apple_watch_series_6', product_name: 'Apple Watch Series 6', price: 399, release_date: '2020-09-18', company_name: 'Apple Inc.' },
    { product_id: 'apple_watch_series_7', product_name: 'Apple Watch Series 7', price: 399, release_date: '2021-10-15', company_name: 'Apple Inc.' },
    { product_id: 'apple_watch_se_2022', product_name: 'Apple Watch SE (2022)', price: 249, release_date: '2022-09-16', company_name: 'Apple Inc.' },
    { product_id: 'apple_watch_series_8', product_name: 'Apple Watch Series 8', price: 399, release_date: '2022-09-23', company_name: 'Apple Inc.' },
    { product_id: 'apple_watch_ultra', product_name: 'Apple Watch Ultra', price: 799, release_date: '2022-09-23', company_name: 'Apple Inc.' },
    { product_id: 'apple_watch_series_9', product_name: 'Apple Watch Series 9', price: 399, release_date: '2023-09-22', company_name: 'Apple Inc.' },
    { product_id: 'apple_watch_ultra_2', product_name: 'Apple Watch Ultra 2', price: 799, release_date: '2023-09-22', company_name: 'Apple Inc.' },
    
    // AirPods Series (2016-2024)
    { product_id: 'airpods_original', product_name: 'AirPods (Original)', price: 159, release_date: '2016-12-13', company_name: 'Apple Inc.' },
    { product_id: 'airpods_2', product_name: 'AirPods (2nd generation)', price: 159, release_date: '2019-03-20', company_name: 'Apple Inc.' },
    { product_id: 'airpods_pro', product_name: 'AirPods Pro', price: 249, release_date: '2019-10-30', company_name: 'Apple Inc.' },
    { product_id: 'airpods_max', product_name: 'AirPods Max', price: 549, release_date: '2020-12-15', company_name: 'Apple Inc.' },
    { product_id: 'airpods_3', product_name: 'AirPods (3rd generation)', price: 179, release_date: '2021-10-26', company_name: 'Apple Inc.' },
    { product_id: 'airpods_pro_2', product_name: 'AirPods Pro (2nd generation)', price: 249, release_date: '2022-09-23', company_name: 'Apple Inc.' },
    
    // Mac Desktop Series (2005-2024)
    { product_id: 'imac_20_2005', product_name: 'iMac 20" (2005)', price: 1299, release_date: '2005-05-03', company_name: 'Apple Inc.' },
    { product_id: 'imac_24_2006', product_name: 'iMac 24" (2006)', price: 1999, release_date: '2006-09-06', company_name: 'Apple Inc.' },
    { product_id: 'imac_20_2007', product_name: 'iMac 20" (2007)', price: 1199, release_date: '2007-08-07', company_name: 'Apple Inc.' },
    { product_id: 'imac_24_2007', product_name: 'iMac 24" (2007)', price: 1799, release_date: '2007-08-07', company_name: 'Apple Inc.' },
    { product_id: 'imac_20_2008', product_name: 'iMac 20" (2008)', price: 1199, release_date: '2008-04-28', company_name: 'Apple Inc.' },
    { product_id: 'imac_24_2008', product_name: 'iMac 24" (2008)', price: 1799, release_date: '2008-04-28', company_name: 'Apple Inc.' },
    { product_id: 'imac_21_5_2009', product_name: 'iMac 21.5" (2009)', price: 1199, release_date: '2009-10-20', company_name: 'Apple Inc.' },
    { product_id: 'imac_27_2009', product_name: 'iMac 27" (2009)', price: 1699, release_date: '2009-10-20', company_name: 'Apple Inc.' },
    { product_id: 'imac_21_5_2010', product_name: 'iMac 21.5" (2010)', price: 1199, release_date: '2010-07-27', company_name: 'Apple Inc.' },
    { product_id: 'imac_27_2010', product_name: 'iMac 27" (2010)', price: 1699, release_date: '2010-07-27', company_name: 'Apple Inc.' },
    { product_id: 'imac_21_5_2011', product_name: 'iMac 21.5" (2011)', price: 1199, release_date: '2011-05-03', company_name: 'Apple Inc.' },
    { product_id: 'imac_27_2011', product_name: 'iMac 27" (2011)', price: 1699, release_date: '2011-05-03', company_name: 'Apple Inc.' },
    { product_id: 'imac_21_5_2012', product_name: 'iMac 21.5" (2012)', price: 1299, release_date: '2012-10-23', company_name: 'Apple Inc.' },
    { product_id: 'imac_27_2012', product_name: 'iMac 27" (2012)', price: 1799, release_date: '2012-10-23', company_name: 'Apple Inc.' },
    { product_id: 'imac_21_5_2013', product_name: 'iMac 21.5" (2013)', price: 1299, release_date: '2013-09-24', company_name: 'Apple Inc.' },
    { product_id: 'imac_27_2013', product_name: 'iMac 27" (2013)', price: 1799, release_date: '2013-09-24', company_name: 'Apple Inc.' },
    { product_id: 'imac_21_5_2014', product_name: 'iMac 21.5" (2014)', price: 1099, release_date: '2014-06-18', company_name: 'Apple Inc.' },
    { product_id: 'imac_27_2014', product_name: 'iMac 27" (2014)', price: 1799, release_date: '2014-06-18', company_name: 'Apple Inc.' },
    { product_id: 'imac_21_5_2015', product_name: 'iMac 21.5" (2015)', price: 1099, release_date: '2015-10-13', company_name: 'Apple Inc.' },
    { product_id: 'imac_27_2015', product_name: 'iMac 27" (2015)', price: 1799, release_date: '2015-10-13', company_name: 'Apple Inc.' },
    { product_id: 'imac_21_5_2017', product_name: 'iMac 21.5" (2017)', price: 1099, release_date: '2017-06-05', company_name: 'Apple Inc.' },
    { product_id: 'imac_27_2017', product_name: 'iMac 27" (2017)', price: 1799, release_date: '2017-06-05', company_name: 'Apple Inc.' },
    { product_id: 'imac_21_5_2019', product_name: 'iMac 21.5" (2019)', price: 1099, release_date: '2019-03-19', company_name: 'Apple Inc.' },
    { product_id: 'imac_27_2019', product_name: 'iMac 27" (2019)', price: 1799, release_date: '2019-03-19', company_name: 'Apple Inc.' },
    { product_id: 'imac_24_2021', product_name: 'iMac 24" (2021)', price: 1299, release_date: '2021-05-21', company_name: 'Apple Inc.' },
    { product_id: 'imac_24_2023', product_name: 'iMac 24" (2023)', price: 1299, release_date: '2023-11-07', company_name: 'Apple Inc.' },
    
    // Mac Mini Series (2005-2024)
    { product_id: 'mac_mini_2005', product_name: 'Mac mini (2005)', price: 499, release_date: '2005-01-11', company_name: 'Apple Inc.' },
    { product_id: 'mac_mini_2006', product_name: 'Mac mini (2006)', price: 599, release_date: '2006-02-28', company_name: 'Apple Inc.' },
    { product_id: 'mac_mini_2007', product_name: 'Mac mini (2007)', price: 599, release_date: '2007-08-07', company_name: 'Apple Inc.' },
    { product_id: 'mac_mini_2009', product_name: 'Mac mini (2009)', price: 599, release_date: '2009-03-03', company_name: 'Apple Inc.' },
    { product_id: 'mac_mini_2010', product_name: 'Mac mini (2010)', price: 699, release_date: '2010-06-15', company_name: 'Apple Inc.' },
    { product_id: 'mac_mini_2011', product_name: 'Mac mini (2011)', price: 599, release_date: '2011-07-20', company_name: 'Apple Inc.' },
    { product_id: 'mac_mini_2012', product_name: 'Mac mini (2012)', price: 599, release_date: '2012-10-23', company_name: 'Apple Inc.' },
    { product_id: 'mac_mini_2014', product_name: 'Mac mini (2014)', price: 499, release_date: '2014-10-16', company_name: 'Apple Inc.' },
    { product_id: 'mac_mini_2018', product_name: 'Mac mini (2018)', price: 799, release_date: '2018-10-30', company_name: 'Apple Inc.' },
    { product_id: 'mac_mini_m1', product_name: 'Mac mini M1', price: 699, release_date: '2020-11-17', company_name: 'Apple Inc.' },
    { product_id: 'mac_mini_m2', product_name: 'Mac mini M2', price: 599, release_date: '2023-01-24', company_name: 'Apple Inc.' },
    
    // Mac Pro Series (2006-2024)
    { product_id: 'mac_pro_2006', product_name: 'Mac Pro (2006)', price: 2499, release_date: '2006-08-07', company_name: 'Apple Inc.' },
    { product_id: 'mac_pro_2008', product_name: 'Mac Pro (2008)', price: 2499, release_date: '2008-01-08', company_name: 'Apple Inc.' },
    { product_id: 'mac_pro_2009', product_name: 'Mac Pro (2009)', price: 2499, release_date: '2009-03-03', company_name: 'Apple Inc.' },
    { product_id: 'mac_pro_2010', product_name: 'Mac Pro (2010)', price: 2499, release_date: '2010-07-27', company_name: 'Apple Inc.' },
    { product_id: 'mac_pro_2012', product_name: 'Mac Pro (2012)', price: 2499, release_date: '2012-06-11', company_name: 'Apple Inc.' },
    { product_id: 'mac_pro_2013', product_name: 'Mac Pro (2013)', price: 2999, release_date: '2013-12-19', company_name: 'Apple Inc.' },
    { product_id: 'mac_pro_2019', product_name: 'Mac Pro (2019)', price: 5999, release_date: '2019-12-10', company_name: 'Apple Inc.' },
    { product_id: 'mac_studio_m1', product_name: 'Mac Studio M1', price: 1999, release_date: '2022-03-18', company_name: 'Apple Inc.' },
    { product_id: 'mac_studio_m2', product_name: 'Mac Studio M2', price: 1999, release_date: '2023-06-13', company_name: 'Apple Inc.' }
];

// Function to import Apple products
async function importAppleProducts() {
    console.log('Starting Apple products import...');
    console.log(`Importing ${appleProducts.length} Apple products...`);
    
    try {
        // Transform the data to match your table structure
        const transformedProducts = appleProducts.map(product => ({
            product_id: product.product_id,
            price: product.price,
            release_date: product.release_date,
            company_name: product.company_name
        }));

        console.log('First few transformed products:', transformedProducts.slice(0, 3));

        // Insert products into Supabase
        const { data, error } = await supabase
            .from('product_table')
            .upsert(transformedProducts, { 
                onConflict: 'product_id',
                ignoreDuplicates: false 
            });

        if (error) {
            console.error('Error importing Apple products:', error);
            return false;
        }

        console.log('Successfully imported Apple products!');
        return true;

    } catch (error) {
        console.error('Import failed:', error);
        return false;
    }
}

// Function to update existing products with company names
async function updateCompanyNames() {
    console.log('Updating company names for existing products...');
    
    try {
        // Get all existing products
        const { data: existingProducts, error: fetchError } = await supabase
            .from('product_table')
            .select('product_id, company_name');
        
        if (fetchError) {
            console.error('Error fetching existing products:', fetchError);
            return false;
        }
        
        console.log(`Found ${existingProducts.length} existing products`);
        
        // Create a mapping of product_id to company_name based on product patterns
        const companyMapping = {};
        
        existingProducts.forEach(product => {
            const productId = product.product_id.toLowerCase();
            
            if (productId.includes('iphone') || productId.includes('ipad') || productId.includes('macbook') || 
                productId.includes('imac') || productId.includes('mac_mini') || productId.includes('mac_pro') ||
                productId.includes('apple_watch') || productId.includes('airpods') || productId.includes('mac_studio')) {
                companyMapping[product.product_id] = 'Apple Inc.';
            } else if (productId.includes('tesla')) {
                companyMapping[product.product_id] = 'Tesla Inc.';
            } else if (productId.includes('surface') || productId.includes('xbox')) {
                companyMapping[product.product_id] = 'Microsoft Corporation';
            } else if (productId.includes('playstation') || productId.includes('sony')) {
                companyMapping[product.product_id] = 'Sony Group Corporation';
            } else if (productId.includes('samsung') || productId.includes('galaxy')) {
                companyMapping[product.product_id] = 'Samsung Electronics';
            } else if (productId.includes('google') || productId.includes('pixel')) {
                companyMapping[product.product_id] = 'Alphabet Inc.';
            } else if (productId.includes('meta') || productId.includes('quest') || productId.includes('ray_ban')) {
                companyMapping[product.product_id] = 'Meta Platforms Inc.';
            } else if (productId.includes('nvidia') || productId.includes('rtx')) {
                companyMapping[product.product_id] = 'NVIDIA Corporation';
            } else if (productId.includes('amd') || productId.includes('ryzen')) {
                companyMapping[product.product_id] = 'Advanced Micro Devices';
            } else if (productId.includes('nintendo') || productId.includes('switch')) {
                companyMapping[product.product_id] = 'Nintendo Co. Ltd.';
            } else if (productId.includes('nike') || productId.includes('jordan')) {
                companyMapping[product.product_id] = 'Nike Inc.';
            } else if (productId.includes('adidas') || productId.includes('ultraboost')) {
                companyMapping[product.product_id] = 'Adidas AG';
            }
        });
        
        // Update products with company names
        const updates = Object.entries(companyMapping).map(([productId, companyName]) => ({
            product_id: productId,
            company_name: companyName
        }));
        
        if (updates.length > 0) {
            const { data, error } = await supabase
                .from('product_table')
                .upsert(updates, { 
                    onConflict: 'product_id',
                    ignoreDuplicates: false 
                });
            
            if (error) {
                console.error('Error updating company names:', error);
                return false;
            }
            
            console.log(`Successfully updated ${updates.length} products with company names!`);
        }
        
        return true;
        
    } catch (error) {
        console.error('Update failed:', error);
        return false;
    }
}

// Main function
async function main() {
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
        console.log('Usage:');
        console.log('  node apple_products.js import     # Import all Apple products');
        console.log('  node apple_products.js update     # Update company names for existing products');
        console.log('  node apple_products.js both       # Do both operations');
        return;
    }
    
    const command = args[0];
    
    switch (command) {
        case 'import':
            await importAppleProducts();
            break;
            
        case 'update':
            await updateCompanyNames();
            break;
            
        case 'both':
            await updateCompanyNames();
            await importAppleProducts();
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
    importAppleProducts,
    updateCompanyNames,
    appleProducts
};
