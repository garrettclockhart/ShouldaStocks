// Comprehensive product database with major US consumer companies
const productDatabase = {
    // Apple Products - Comprehensive History
    // iPhone Series
    'iphone 15 pro max': { name: 'iPhone 15 Pro Max', price: 1199, releaseDate: '2023-09-22', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 15 pro': { name: 'iPhone 15 Pro', price: 999, releaseDate: '2023-09-22', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 15 plus': { name: 'iPhone 15 Plus', price: 899, releaseDate: '2023-09-22', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 15': { name: 'iPhone 15', price: 799, releaseDate: '2023-09-22', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 14 pro max': { name: 'iPhone 14 Pro Max', price: 1099, releaseDate: '2022-09-16', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 14 pro': { name: 'iPhone 14 Pro', price: 999, releaseDate: '2022-09-16', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 14 plus': { name: 'iPhone 14 Plus', price: 899, releaseDate: '2022-09-16', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 14': { name: 'iPhone 14', price: 799, releaseDate: '2022-09-16', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 13 pro max': { name: 'iPhone 13 Pro Max', price: 1099, releaseDate: '2021-09-24', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 13 pro': { name: 'iPhone 13 Pro', price: 999, releaseDate: '2021-09-24', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 13': { name: 'iPhone 13', price: 799, releaseDate: '2021-09-24', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 13 mini': { name: 'iPhone 13 mini', price: 699, releaseDate: '2021-09-24', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 12 pro max': { name: 'iPhone 12 Pro Max', price: 1099, releaseDate: '2020-11-13', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 12 pro': { name: 'iPhone 12 Pro', price: 999, releaseDate: '2020-10-23', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 12': { name: 'iPhone 12', price: 799, releaseDate: '2020-10-23', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 12 mini': { name: 'iPhone 12 mini', price: 699, releaseDate: '2020-11-13', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 11 pro max': { name: 'iPhone 11 Pro Max', price: 1099, releaseDate: '2019-09-20', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 11 pro': { name: 'iPhone 11 Pro', price: 999, releaseDate: '2019-09-20', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 11': { name: 'iPhone 11', price: 699, releaseDate: '2019-09-20', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone xs max': { name: 'iPhone XS Max', price: 1099, releaseDate: '2018-09-21', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone xs': { name: 'iPhone XS', price: 999, releaseDate: '2018-09-21', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone xr': { name: 'iPhone XR', price: 749, releaseDate: '2018-10-26', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone x': { name: 'iPhone X', price: 999, releaseDate: '2017-11-03', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 8 plus': { name: 'iPhone 8 Plus', price: 799, releaseDate: '2017-09-22', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 8': { name: 'iPhone 8', price: 699, releaseDate: '2017-09-22', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 7 plus': { name: 'iPhone 7 Plus', price: 769, releaseDate: '2016-09-16', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 7': { name: 'iPhone 7', price: 649, releaseDate: '2016-09-16', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 6s plus': { name: 'iPhone 6s Plus', price: 749, releaseDate: '2015-09-25', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 6s': { name: 'iPhone 6s', price: 649, releaseDate: '2015-09-25', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 6 plus': { name: 'iPhone 6 Plus', price: 749, releaseDate: '2014-09-19', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 6': { name: 'iPhone 6', price: 649, releaseDate: '2014-09-19', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 5s': { name: 'iPhone 5s', price: 649, releaseDate: '2013-09-20', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 5c': { name: 'iPhone 5c', price: 549, releaseDate: '2013-09-20', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 5': { name: 'iPhone 5', price: 649, releaseDate: '2012-09-21', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 4s': { name: 'iPhone 4s', price: 649, releaseDate: '2011-10-14', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 4': { name: 'iPhone 4', price: 599, releaseDate: '2010-06-24', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 3gs': { name: 'iPhone 3GS', price: 599, releaseDate: '2009-06-19', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone 3g': { name: 'iPhone 3G', price: 599, releaseDate: '2008-07-11', company: 'Apple Inc.', symbol: 'AAPL' },
    'iphone': { name: 'iPhone (Original)', price: 599, releaseDate: '2007-06-29', company: 'Apple Inc.', symbol: 'AAPL' },

    // MacBook Series
    'macbook pro 16': { name: 'MacBook Pro 16"', price: 2499, releaseDate: '2021-10-26', company: 'Apple Inc.', symbol: 'AAPL' },
    'macbook pro 14': { name: 'MacBook Pro 14"', price: 1999, releaseDate: '2021-10-26', company: 'Apple Inc.', symbol: 'AAPL' },
    'macbook air m3': { name: 'MacBook Air M3', price: 1099, releaseDate: '2024-03-08', company: 'Apple Inc.', symbol: 'AAPL' },
    'macbook air m2': { name: 'MacBook Air M2', price: 1199, releaseDate: '2022-07-15', company: 'Apple Inc.', symbol: 'AAPL' },
    'macbook air m1': { name: 'MacBook Air M1', price: 999, releaseDate: '2020-11-17', company: 'Apple Inc.', symbol: 'AAPL' },
    'macbook pro 13 m2': { name: 'MacBook Pro 13" M2', price: 1299, releaseDate: '2022-06-24', company: 'Apple Inc.', symbol: 'AAPL' },
    'macbook pro 13 m1': { name: 'MacBook Pro 13" M1', price: 1299, releaseDate: '2020-11-17', company: 'Apple Inc.', symbol: 'AAPL' },
    'macbook air intel': { name: 'MacBook Air Intel', price: 999, releaseDate: '2018-10-30', company: 'Apple Inc.', symbol: 'AAPL' },
    'macbook pro 15': { name: 'MacBook Pro 15"', price: 2399, releaseDate: '2016-10-27', company: 'Apple Inc.', symbol: 'AAPL' },
    'macbook pro 13': { name: 'MacBook Pro 13"', price: 1499, releaseDate: '2016-10-27', company: 'Apple Inc.', symbol: 'AAPL' },
    'macbook': { name: 'MacBook', price: 1299, releaseDate: '2015-04-10', company: 'Apple Inc.', symbol: 'AAPL' },

    // iPad Series
    'ipad pro 12.9': { name: 'iPad Pro 12.9"', price: 1099, releaseDate: '2022-10-26', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipad pro 11': { name: 'iPad Pro 11"', price: 799, releaseDate: '2022-10-26', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipad air': { name: 'iPad Air', price: 599, releaseDate: '2022-03-18', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipad': { name: 'iPad', price: 449, releaseDate: '2022-10-26', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipad mini': { name: 'iPad mini', price: 499, releaseDate: '2021-09-24', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipad pro 12.9 2021': { name: 'iPad Pro 12.9" (2021)', price: 1099, releaseDate: '2021-05-21', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipad pro 11 2021': { name: 'iPad Pro 11" (2021)', price: 799, releaseDate: '2021-05-21', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipad air 2020': { name: 'iPad Air (2020)', price: 599, releaseDate: '2020-10-23', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipad 2020': { name: 'iPad (2020)', price: 329, releaseDate: '2020-09-15', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipad mini 2019': { name: 'iPad mini (2019)', price: 399, releaseDate: '2019-03-18', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipad air 2019': { name: 'iPad Air (2019)', price: 499, releaseDate: '2019-03-18', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipad pro 12.9 2018': { name: 'iPad Pro 12.9" (2018)', price: 999, releaseDate: '2018-11-07', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipad pro 11 2018': { name: 'iPad Pro 11" (2018)', price: 799, releaseDate: '2018-11-07', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipad 2018': { name: 'iPad (2018)', price: 329, releaseDate: '2018-03-27', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipad pro 12.9 2017': { name: 'iPad Pro 12.9" (2017)', price: 799, releaseDate: '2017-06-13', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipad pro 10.5': { name: 'iPad Pro 10.5"', price: 649, releaseDate: '2017-06-13', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipad 2017': { name: 'iPad (2017)', price: 329, releaseDate: '2017-03-24', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipad pro 12.9 2015': { name: 'iPad Pro 12.9" (2015)', price: 799, releaseDate: '2015-11-11', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipad pro 9.7': { name: 'iPad Pro 9.7"', price: 599, releaseDate: '2016-03-31', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipad air 2': { name: 'iPad Air 2', price: 499, releaseDate: '2014-10-22', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipad air': { name: 'iPad Air', price: 499, releaseDate: '2013-11-01', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipad mini 3': { name: 'iPad mini 3', price: 399, releaseDate: '2014-10-22', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipad mini 2': { name: 'iPad mini 2', price: 399, releaseDate: '2013-11-12', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipad mini': { name: 'iPad mini', price: 329, releaseDate: '2012-11-02', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipad 4': { name: 'iPad (4th generation)', price: 499, releaseDate: '2012-11-02', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipad 3': { name: 'iPad (3rd generation)', price: 499, releaseDate: '2012-03-16', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipad 2': { name: 'iPad 2', price: 499, releaseDate: '2011-03-11', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipad': { name: 'iPad (Original)', price: 499, releaseDate: '2010-04-03', company: 'Apple Inc.', symbol: 'AAPL' },

    // iPod Series - Historical Products
    'ipod touch 7': { name: 'iPod touch (7th generation)', price: 199, releaseDate: '2019-05-28', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipod touch 6': { name: 'iPod touch (6th generation)', price: 199, releaseDate: '2015-07-15', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipod touch 5': { name: 'iPod touch (5th generation)', price: 199, releaseDate: '2012-10-11', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipod touch 4': { name: 'iPod touch (4th generation)', price: 229, releaseDate: '2010-09-08', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipod touch 3': { name: 'iPod touch (3rd generation)', price: 199, releaseDate: '2009-09-09', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipod touch 2': { name: 'iPod touch (2nd generation)', price: 229, releaseDate: '2008-09-09', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipod touch': { name: 'iPod touch (Original)', price: 299, releaseDate: '2007-09-05', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipod classic 160gb': { name: 'iPod Classic 160GB', price: 249, releaseDate: '2009-09-09', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipod classic 120gb': { name: 'iPod Classic 120GB', price: 249, releaseDate: '2008-09-09', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipod classic 80gb': { name: 'iPod Classic 80GB', price: 249, releaseDate: '2007-09-05', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipod classic 30gb': { name: 'iPod Classic 30GB', price: 249, releaseDate: '2007-09-05', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipod classic': { name: 'iPod Classic', price: 249, releaseDate: '2007-09-05', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipod video 60gb': { name: 'iPod Video 60GB', price: 399, releaseDate: '2005-10-12', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipod video 30gb': { name: 'iPod Video 30GB', price: 299, releaseDate: '2005-10-12', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipod video': { name: 'iPod Video', price: 299, releaseDate: '2005-10-12', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipod photo 60gb': { name: 'iPod Photo 60GB', price: 499, releaseDate: '2004-10-26', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipod photo 40gb': { name: 'iPod Photo 40GB', price: 399, releaseDate: '2004-10-26', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipod photo': { name: 'iPod Photo', price: 399, releaseDate: '2004-10-26', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipod mini 6gb': { name: 'iPod mini 6GB', price: 249, releaseDate: '2004-02-20', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipod mini 4gb': { name: 'iPod mini 4GB', price: 249, releaseDate: '2004-02-20', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipod mini': { name: 'iPod mini', price: 249, releaseDate: '2004-02-20', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipod 3g 40gb': { name: 'iPod (3rd generation) 40GB', price: 499, releaseDate: '2003-04-28', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipod 3g 30gb': { name: 'iPod (3rd generation) 30GB', price: 399, releaseDate: '2003-04-28', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipod 3g 15gb': { name: 'iPod (3rd generation) 15GB', price: 299, releaseDate: '2003-04-28', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipod 3g': { name: 'iPod (3rd generation)', price: 299, releaseDate: '2003-04-28', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipod 2g 20gb': { name: 'iPod (2nd generation) 20GB', price: 399, releaseDate: '2002-07-17', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipod 2g 10gb': { name: 'iPod (2nd generation) 10GB', price: 299, releaseDate: '2002-07-17', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipod 2g': { name: 'iPod (2nd generation)', price: 299, releaseDate: '2002-07-17', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipod 5gb': { name: 'iPod (Original) 5GB', price: 399, releaseDate: '2001-10-23', company: 'Apple Inc.', symbol: 'AAPL' },
    'ipod': { name: 'iPod (Original)', price: 399, releaseDate: '2001-10-23', company: 'Apple Inc.', symbol: 'AAPL' },

    // Apple Watch Series
    'apple watch ultra 2': { name: 'Apple Watch Ultra 2', price: 799, releaseDate: '2023-09-22', company: 'Apple Inc.', symbol: 'AAPL' },
    'apple watch series 9': { name: 'Apple Watch Series 9', price: 399, releaseDate: '2023-09-22', company: 'Apple Inc.', symbol: 'AAPL' },
    'apple watch se': { name: 'Apple Watch SE', price: 249, releaseDate: '2022-09-16', company: 'Apple Inc.', symbol: 'AAPL' },
    'apple watch ultra': { name: 'Apple Watch Ultra', price: 799, releaseDate: '2022-09-23', company: 'Apple Inc.', symbol: 'AAPL' },
    'apple watch series 8': { name: 'Apple Watch Series 8', price: 399, releaseDate: '2022-09-23', company: 'Apple Inc.', symbol: 'AAPL' },
    'apple watch series 7': { name: 'Apple Watch Series 7', price: 399, releaseDate: '2021-10-15', company: 'Apple Inc.', symbol: 'AAPL' },
    'apple watch series 6': { name: 'Apple Watch Series 6', price: 399, releaseDate: '2020-09-18', company: 'Apple Inc.', symbol: 'AAPL' },
    'apple watch se 2020': { name: 'Apple Watch SE (2020)', price: 279, releaseDate: '2020-09-18', company: 'Apple Inc.', symbol: 'AAPL' },
    'apple watch series 5': { name: 'Apple Watch Series 5', price: 399, releaseDate: '2019-09-20', company: 'Apple Inc.', symbol: 'AAPL' },
    'apple watch series 4': { name: 'Apple Watch Series 4', price: 399, releaseDate: '2018-09-21', company: 'Apple Inc.', symbol: 'AAPL' },
    'apple watch series 3': { name: 'Apple Watch Series 3', price: 329, releaseDate: '2017-09-22', company: 'Apple Inc.', symbol: 'AAPL' },
    'apple watch series 2': { name: 'Apple Watch Series 2', price: 369, releaseDate: '2016-09-16', company: 'Apple Inc.', symbol: 'AAPL' },
    'apple watch series 1': { name: 'Apple Watch Series 1', price: 269, releaseDate: '2016-09-16', company: 'Apple Inc.', symbol: 'AAPL' },
    'apple watch': { name: 'Apple Watch (Original)', price: 349, releaseDate: '2015-04-24', company: 'Apple Inc.', symbol: 'AAPL' },

    // AirPods Series
    'airpods pro 2': { name: 'AirPods Pro 2nd Gen', price: 249, releaseDate: '2022-09-23', company: 'Apple Inc.', symbol: 'AAPL' },
    'airpods 3': { name: 'AirPods 3rd Gen', price: 179, releaseDate: '2021-10-26', company: 'Apple Inc.', symbol: 'AAPL' },
    'airpods max': { name: 'AirPods Max', price: 549, releaseDate: '2020-12-15', company: 'Apple Inc.', symbol: 'AAPL' },
    'airpods pro': { name: 'AirPods Pro', price: 249, releaseDate: '2019-10-30', company: 'Apple Inc.', symbol: 'AAPL' },
    'airpods 2': { name: 'AirPods 2nd Gen', price: 159, releaseDate: '2019-03-20', company: 'Apple Inc.', symbol: 'AAPL' },
    'airpods': { name: 'AirPods (Original)', price: 159, releaseDate: '2016-12-13', company: 'Apple Inc.', symbol: 'AAPL' },

    // Mac Desktop Series
    'imac 24': { name: 'iMac 24"', price: 1299, releaseDate: '2021-05-21', company: 'Apple Inc.', symbol: 'AAPL' },
    'imac 27': { name: 'iMac 27"', price: 1799, releaseDate: '2020-08-04', company: 'Apple Inc.', symbol: 'AAPL' },
    'mac studio': { name: 'Mac Studio', price: 1999, releaseDate: '2022-03-18', company: 'Apple Inc.', symbol: 'AAPL' },
    'mac pro': { name: 'Mac Pro', price: 5999, releaseDate: '2019-12-10', company: 'Apple Inc.', symbol: 'AAPL' },
    'mac mini m2': { name: 'Mac mini M2', price: 599, releaseDate: '2023-01-24', company: 'Apple Inc.', symbol: 'AAPL' },
    'mac mini m1': { name: 'Mac mini M1', price: 699, releaseDate: '2020-11-17', company: 'Apple Inc.', symbol: 'AAPL' },

    // Tesla Products
    'tesla model s plaid': { name: 'Tesla Model S Plaid', price: 108990, releaseDate: '2021-06-10', company: 'Tesla Inc.', symbol: 'TSLA' },
    'tesla model s': { name: 'Tesla Model S', price: 74990, releaseDate: '2012-06-22', company: 'Tesla Inc.', symbol: 'TSLA' },
    'tesla model x plaid': { name: 'Tesla Model X Plaid', price: 108990, releaseDate: '2021-06-10', company: 'Tesla Inc.', symbol: 'TSLA' },
    'tesla model x': { name: 'Tesla Model X', price: 79990, releaseDate: '2015-09-29', company: 'Tesla Inc.', symbol: 'TSLA' },
    'tesla model y performance': { name: 'Tesla Model Y Performance', price: 52490, releaseDate: '2020-03-15', company: 'Tesla Inc.', symbol: 'TSLA' },
    'tesla model y': { name: 'Tesla Model Y', price: 47740, releaseDate: '2020-03-15', company: 'Tesla Inc.', symbol: 'TSLA' },
    'tesla model 3 performance': { name: 'Tesla Model 3 Performance', price: 50990, releaseDate: '2017-07-28', company: 'Tesla Inc.', symbol: 'TSLA' },
    'tesla model 3': { name: 'Tesla Model 3', price: 38990, releaseDate: '2017-07-28', company: 'Tesla Inc.', symbol: 'TSLA' },
    'tesla cybertruck': { name: 'Tesla Cybertruck', price: 60890, releaseDate: '2023-11-30', company: 'Tesla Inc.', symbol: 'TSLA' },

    // Microsoft Products
    'surface laptop studio 2': { name: 'Surface Laptop Studio 2', price: 1999, releaseDate: '2023-10-03', company: 'Microsoft Corporation', symbol: 'MSFT' },
    'surface laptop 5': { name: 'Surface Laptop 5', price: 999, releaseDate: '2022-10-25', company: 'Microsoft Corporation', symbol: 'MSFT' },
    'surface pro 9': { name: 'Surface Pro 9', price: 1099, releaseDate: '2022-10-25', company: 'Microsoft Corporation', symbol: 'MSFT' },
    'surface studio 2': { name: 'Surface Studio 2', price: 3499, releaseDate: '2018-10-02', company: 'Microsoft Corporation', symbol: 'MSFT' },
    'xbox series x': { name: 'Xbox Series X', price: 499, releaseDate: '2020-11-10', company: 'Microsoft Corporation', symbol: 'MSFT' },
    'xbox series s': { name: 'Xbox Series S', price: 299, releaseDate: '2020-11-10', company: 'Microsoft Corporation', symbol: 'MSFT' },
    'xbox one x': { name: 'Xbox One X', price: 499, releaseDate: '2017-11-07', company: 'Microsoft Corporation', symbol: 'MSFT' },

    // Sony Products
    'playstation 5': { name: 'PlayStation 5', price: 499, releaseDate: '2020-11-12', company: 'Sony Group Corporation', symbol: 'SONY' },
    'playstation 5 digital': { name: 'PlayStation 5 Digital Edition', price: 399, releaseDate: '2020-11-12', company: 'Sony Group Corporation', symbol: 'SONY' },
    'playstation 4 pro': { name: 'PlayStation 4 Pro', price: 399, releaseDate: '2016-11-10', company: 'Sony Group Corporation', symbol: 'SONY' },
    'playstation vr2': { name: 'PlayStation VR2', price: 549, releaseDate: '2023-02-22', company: 'Sony Group Corporation', symbol: 'SONY' },
    'sony wh-1000xm5': { name: 'Sony WH-1000XM5 Headphones', price: 399, releaseDate: '2022-05-12', company: 'Sony Group Corporation', symbol: 'SONY' },
    'sony a7r v': { name: 'Sony A7R V Camera', price: 3898, releaseDate: '2022-10-26', company: 'Sony Group Corporation', symbol: 'SONY' },
    'sony a7 iv': { name: 'Sony A7 IV Camera', price: 2498, releaseDate: '2021-10-21', company: 'Sony Group Corporation', symbol: 'SONY' },

    // Nintendo Products
    'nintendo switch oled': { name: 'Nintendo Switch OLED', price: 349, releaseDate: '2021-10-08', company: 'Nintendo Co., Ltd.', symbol: 'NTDOY' },
    'nintendo switch': { name: 'Nintendo Switch', price: 299, releaseDate: '2017-03-03', company: 'Nintendo Co., Ltd.', symbol: 'NTDOY' },
    'nintendo switch lite': { name: 'Nintendo Switch Lite', price: 199, releaseDate: '2019-09-20', company: 'Nintendo Co., Ltd.', symbol: 'NTDOY' },

    // NVIDIA Products
    'nvidia rtx 4090': { name: 'NVIDIA GeForce RTX 4090', price: 1599, releaseDate: '2022-10-12', company: 'NVIDIA Corporation', symbol: 'NVDA' },
    'nvidia rtx 4080': { name: 'NVIDIA GeForce RTX 4080', price: 1199, releaseDate: '2022-11-16', company: 'NVIDIA Corporation', symbol: 'NVDA' },
    'nvidia rtx 4070': { name: 'NVIDIA GeForce RTX 4070', price: 599, releaseDate: '2023-04-13', company: 'NVIDIA Corporation', symbol: 'NVDA' },
    'nvidia rtx 3090': { name: 'NVIDIA GeForce RTX 3090', price: 1499, releaseDate: '2020-09-24', company: 'NVIDIA Corporation', symbol: 'NVDA' },
    'nvidia rtx 3080': { name: 'NVIDIA GeForce RTX 3080', price: 699, releaseDate: '2020-09-17', company: 'NVIDIA Corporation', symbol: 'NVDA' },

    // AMD Products
    'amd ryzen 9 7950x': { name: 'AMD Ryzen 9 7950X', price: 699, releaseDate: '2022-09-27', company: 'Advanced Micro Devices', symbol: 'AMD' },
    'amd ryzen 7 7700x': { name: 'AMD Ryzen 7 7700X', price: 399, releaseDate: '2022-09-27', company: 'Advanced Micro Devices', symbol: 'AMD' },
    'amd ryzen 5 7600x': { name: 'AMD Ryzen 5 7600X', price: 299, releaseDate: '2022-09-27', company: 'Advanced Micro Devices', symbol: 'AMD' },

    // Samsung Products
    'samsung galaxy s24 ultra': { name: 'Samsung Galaxy S24 Ultra', price: 1299, releaseDate: '2024-01-17', company: 'Samsung Electronics', symbol: 'SSNLF' },
    'samsung galaxy s24 plus': { name: 'Samsung Galaxy S24 Plus', price: 999, releaseDate: '2024-01-17', company: 'Samsung Electronics', symbol: 'SSNLF' },
    'samsung galaxy s24': { name: 'Samsung Galaxy S24', price: 799, releaseDate: '2024-01-17', company: 'Samsung Electronics', symbol: 'SSNLF' },
    'samsung galaxy s23 ultra': { name: 'Samsung Galaxy S23 Ultra', price: 1199, releaseDate: '2023-02-17', company: 'Samsung Electronics', symbol: 'SSNLF' },
    'samsung galaxy s23 plus': { name: 'Samsung Galaxy S23 Plus', price: 999, releaseDate: '2023-02-17', company: 'Samsung Electronics', symbol: 'SSNLF' },
    'samsung galaxy s23': { name: 'Samsung Galaxy S23', price: 799, releaseDate: '2023-02-17', company: 'Samsung Electronics', symbol: 'SSNLF' },
    'samsung galaxy z fold 5': { name: 'Samsung Galaxy Z Fold 5', price: 1799, releaseDate: '2023-08-11', company: 'Samsung Electronics', symbol: 'SSNLF' },
    'samsung galaxy z flip 5': { name: 'Samsung Galaxy Z Flip 5', price: 999, releaseDate: '2023-08-11', company: 'Samsung Electronics', symbol: 'SSNLF' },

    // Google Products
    'google pixel 8 pro': { name: 'Google Pixel 8 Pro', price: 999, releaseDate: '2023-10-12', company: 'Alphabet Inc.', symbol: 'GOOGL' },
    'google pixel 8': { name: 'Google Pixel 8', price: 699, releaseDate: '2023-10-12', company: 'Alphabet Inc.', symbol: 'GOOGL' },
    'google pixel 7 pro': { name: 'Google Pixel 7 Pro', price: 899, releaseDate: '2022-10-13', company: 'Alphabet Inc.', symbol: 'GOOGL' },
    'google pixel 7': { name: 'Google Pixel 7', price: 599, releaseDate: '2022-10-13', company: 'Alphabet Inc.', symbol: 'GOOGL' },
    'google pixel watch 2': { name: 'Google Pixel Watch 2', price: 349, releaseDate: '2023-10-12', company: 'Alphabet Inc.', symbol: 'GOOGL' },
    'google pixel buds pro': { name: 'Google Pixel Buds Pro', price: 199, releaseDate: '2022-07-28', company: 'Alphabet Inc.', symbol: 'GOOGL' },

    // Meta Products
    'meta quest 3': { name: 'Meta Quest 3', price: 499, releaseDate: '2023-10-10', company: 'Meta Platforms Inc.', symbol: 'META' },
    'meta quest 2': { name: 'Meta Quest 2', price: 299, releaseDate: '2020-10-13', company: 'Meta Platforms Inc.', symbol: 'META' },
    'meta quest pro': { name: 'Meta Quest Pro', price: 1499, releaseDate: '2022-10-25', company: 'Meta Platforms Inc.', symbol: 'META' },
    'meta ray-ban stories': { name: 'Meta Ray-Ban Stories', price: 299, releaseDate: '2021-09-09', company: 'Meta Platforms Inc.', symbol: 'META' },

    // Nike Products
    'nike air jordan 1': { name: 'Nike Air Jordan 1', price: 170, releaseDate: '1985-04-01', company: 'Nike Inc.', symbol: 'NKE' },
    'nike air max 270': { name: 'Nike Air Max 270', price: 150, releaseDate: '2018-02-01', company: 'Nike Inc.', symbol: 'NKE' },
    'nike air force 1': { name: 'Nike Air Force 1', price: 90, releaseDate: '1982-01-01', company: 'Nike Inc.', symbol: 'NKE' },
    'nike dunk low': { name: 'Nike Dunk Low', price: 100, releaseDate: '1985-01-01', company: 'Nike Inc.', symbol: 'NKE' },
    'nike react element 55': { name: 'Nike React Element 55', price: 130, releaseDate: '2018-06-01', company: 'Nike Inc.', symbol: 'NKE' },

    // Adidas Products
    'adidas yeezy boost 350': { name: 'Adidas Yeezy Boost 350', price: 220, releaseDate: '2015-06-27', company: 'Adidas AG', symbol: 'ADDYY' },
    'adidas ultraboost 22': { name: 'Adidas Ultraboost 22', price: 190, releaseDate: '2022-01-01', company: 'Adidas AG', symbol: 'ADDYY' },
    'adidas stan smith': { name: 'Adidas Stan Smith', price: 80, releaseDate: '1965-01-01', company: 'Adidas AG', symbol: 'ADDYY' },
    'adidas nmd r1': { name: 'Adidas NMD R1', price: 130, releaseDate: '2015-12-10', company: 'Adidas AG', symbol: 'ADDYY' },

    // Converse Products
    'converse chuck taylor all star': { name: 'Converse Chuck Taylor All Star', price: 60, releaseDate: '1917-01-01', company: 'Nike Inc.', symbol: 'NKE' },
    'converse one star': { name: 'Converse One Star', price: 70, releaseDate: '1974-01-01', company: 'Nike Inc.', symbol: 'NKE' },

    // Automotive Companies
    'bmw 3 series': { name: 'BMW 3 Series', price: 41450, releaseDate: '2019-03-01', company: 'Bayerische Motoren Werke AG', symbol: 'BMWYY' },
    'bmw x5': { name: 'BMW X5', price: 60100, releaseDate: '2019-06-01', company: 'Bayerische Motoren Werke AG', symbol: 'BMWYY' },
    'bmw i4': { name: 'BMW i4', price: 55400, releaseDate: '2022-03-01', company: 'Bayerische Motoren Werke AG', symbol: 'BMWYY' },
    'mercedes c class': { name: 'Mercedes-Benz C-Class', price: 43550, releaseDate: '2021-02-23', company: 'Mercedes-Benz Group AG', symbol: 'MBGYY' },
    'mercedes e class': { name: 'Mercedes-Benz E-Class', price: 55400, releaseDate: '2021-02-23', company: 'Mercedes-Benz Group AG', symbol: 'MBGYY' },
    'mercedes s class': { name: 'Mercedes-Benz S-Class', price: 111000, releaseDate: '2021-02-23', company: 'Mercedes-Benz Group AG', symbol: 'MBGYY' },
    'audi a4': { name: 'Audi A4', price: 39500, releaseDate: '2017-01-01', company: 'Volkswagen AG', symbol: 'VWAGY' },
    'audi q5': { name: 'Audi Q5', price: 43200, releaseDate: '2017-01-01', company: 'Volkswagen AG', symbol: 'VWAGY' },
    'audi etron': { name: 'Audi e-tron', price: 65800, releaseDate: '2019-04-01', company: 'Volkswagen AG', symbol: 'VWAGY' },

    // Ford Products
    'ford f-150': { name: 'Ford F-150', price: 28490, releaseDate: '2021-01-01', company: 'Ford Motor Company', symbol: 'F' },
    'ford mustang mach-e': { name: 'Ford Mustang Mach-E', price: 42895, releaseDate: '2021-01-01', company: 'Ford Motor Company', symbol: 'F' },
    'ford bronco': { name: 'Ford Bronco', price: 28500, releaseDate: '2021-06-01', company: 'Ford Motor Company', symbol: 'F' },

    // General Motors Products
    'chevrolet silverado': { name: 'Chevrolet Silverado', price: 28900, releaseDate: '2019-01-01', company: 'General Motors Company', symbol: 'GM' },
    'chevrolet bolt euv': { name: 'Chevrolet Bolt EUV', price: 33995, releaseDate: '2022-01-01', company: 'General Motors Company', symbol: 'GM' },
    'cadillac lyriq': { name: 'Cadillac Lyriq', price: 59990, releaseDate: '2022-01-01', company: 'General Motors Company', symbol: 'GM' },

    // Home & Lifestyle
    'dyson v15 detect': { name: 'Dyson V15 Detect Vacuum', price: 749, releaseDate: '2021-03-01', company: 'Dyson Ltd.', symbol: 'DYSON' },
    'dyson airwrap': { name: 'Dyson Airwrap', price: 549, releaseDate: '2018-10-01', company: 'Dyson Ltd.', symbol: 'DYSON' },
    'dyson supersonic': { name: 'Dyson Supersonic Hair Dryer', price: 399, releaseDate: '2016-04-01', company: 'Dyson Ltd.', symbol: 'DYSON' },

    // Kitchen Appliances
    'vitamix a3500': { name: 'Vitamix A3500 Blender', price: 599, releaseDate: '2019-01-01', company: 'Vitamix Corporation', symbol: 'VITAMIX' },
    'kitchenaid stand mixer': { name: 'KitchenAid Stand Mixer', price: 379, releaseDate: '1919-01-01', company: 'Whirlpool Corporation', symbol: 'WHR' },
    'instant pot duo': { name: 'Instant Pot Duo', price: 99, releaseDate: '2010-01-01', company: 'Instant Brands Inc.', symbol: 'INSTANT' },

    // Furniture & Home
    'herman miller aeron': { name: 'Herman Miller Aeron Chair', price: 1445, releaseDate: '1994-01-01', company: 'Herman Miller Inc.', symbol: 'MLHR' },
    'ikea hemnes': { name: 'IKEA Hemnes Dresser', price: 199, releaseDate: '2000-01-01', company: 'Inter IKEA Group', symbol: 'IKEA' },

    // Beauty & Personal Care
    'dyson airwrap': { name: 'Dyson Airwrap', price: 549, releaseDate: '2018-10-01', company: 'Dyson Ltd.', symbol: 'DYSON' },
    'foreo luna 3': { name: 'FOREO Luna 3', price: 199, releaseDate: '2019-01-01', company: 'FOREO AB', symbol: 'FOREO' },

    // Outdoor & Sports
    'peloton bike': { name: 'Peloton Bike', price: 1445, releaseDate: '2014-01-01', company: 'Peloton Interactive Inc.', symbol: 'PTON' },
    'peloton bike plus': { name: 'Peloton Bike+', price: 2495, releaseDate: '2020-09-01', company: 'Peloton Interactive Inc.', symbol: 'PTON' },
    'peloton tread': { name: 'Peloton Tread', price: 2495, releaseDate: '2018-01-01', company: 'Peloton Interactive Inc.', symbol: 'PTON' },

    // Gaming & Entertainment
    'steam deck': { name: 'Steam Deck', price: 399, releaseDate: '2022-02-25', company: 'Valve Corporation', symbol: 'VALVE' },
    'oculus quest 2': { name: 'Oculus Quest 2', price: 299, releaseDate: '2020-10-13', company: 'Meta Platforms Inc.', symbol: 'META' }
};

class ShouldaStocksApp {
    constructor() {
        this.chart = null;
        this.refreshInterval = null;
        this.lastRefreshTime = null;
        this.currentProduct = null;
        this.dataCache = new Map(); // Cache for API responses
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupSearchSuggestions();
        this.setupTabSystem();
        this.setupCompanyDropdown();
        this.startDataRefresh();
    }

    startDataRefresh() {
        // Clear any existing interval
        if (this.refreshInterval) {
            clearInterval(this.refreshInterval);
        }
        
        // Set up refresh every 15 minutes (900,000 milliseconds)
        this.refreshInterval = setInterval(() => {
            this.refreshCurrentData();
        }, 15 * 60 * 1000); // 15 minutes
    }

    refreshCurrentData() {
        if (this.currentProduct) {
            console.log('Refreshing stock data...');
            // Refresh data without showing loading spinner
            this.analyzeInvestment(this.currentProduct, true);
        }
    }

    stopDataRefresh() {
        if (this.refreshInterval) {
            clearInterval(this.refreshInterval);
            this.refreshInterval = null;
        }
    }

    setupEventListeners() {
        const searchBtn = document.getElementById('searchBtn');
        const searchInput = document.getElementById('productSearch');
        const browseSearchBtn = document.getElementById('browseSearchBtn');

        searchBtn.addEventListener('click', () => this.handleSearch());
        browseSearchBtn.addEventListener('click', () => this.handleBrowseSearch());
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleSearch();
            }
        });

        searchInput.addEventListener('input', (e) => {
            this.showSuggestions(e.target.value);
        });
    }

    setupTabSystem() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.dataset.tab;
                
                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                button.classList.add('active');
                document.getElementById(targetTab + 'Tab').classList.add('active');
            });
        });
    }

    setupCompanyDropdown() {
        const companySelect = document.getElementById('companySelect');
        const productSelect = document.getElementById('productSelect');
        
        // Get unique companies from product database
        const companies = [...new Set(Object.values(productDatabase).map(product => product.company))].sort();
        
        // Populate company dropdown
        companies.forEach(company => {
            const option = document.createElement('option');
            option.value = company;
            option.textContent = company;
            companySelect.appendChild(option);
        });
        
        // Handle company selection
        companySelect.addEventListener('change', (e) => {
            const selectedCompany = e.target.value;
            productSelect.innerHTML = '<option value="">Choose a product...</option>';
            
            if (selectedCompany) {
                // Filter products by company
                const companyProducts = Object.entries(productDatabase)
                    .filter(([key, product]) => product.company === selectedCompany)
                    .sort((a, b) => new Date(b[1].releaseDate) - new Date(a[1].releaseDate)); // Sort by release date, newest first
                
                companyProducts.forEach(([key, product]) => {
                    const option = document.createElement('option');
                    option.value = key;
                    option.textContent = `${product.name} - $${product.price.toLocaleString()} (${new Date(product.releaseDate).getFullYear()})`;
                    productSelect.appendChild(option);
                });
                
                productSelect.disabled = false;
                document.getElementById('browseSearchBtn').disabled = false;
            } else {
                productSelect.disabled = true;
                document.getElementById('browseSearchBtn').disabled = true;
            }
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
        this.currentProduct = product; // Store current product for refresh
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

    async handleBrowseSearch() {
        const productSelect = document.getElementById('productSelect');
        const selectedProductKey = productSelect.value;
        
        if (!selectedProductKey) {
            this.showError('Please select a product');
            return;
        }

        const product = productDatabase[selectedProductKey];
        this.currentProduct = product; // Store current product for refresh
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

    async analyzeInvestment(product, silentRefresh = false) {
        try {
            // Get historical stock data
            const result = await this.fetchStockData(product.symbol, product.releaseDate);
            const stockData = result.data || result; // Handle both old and new formats
            const splits = result.splits || [];
            
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
                stockData,
                splits
            }, silentRefresh);

        } catch (error) {
            console.error('Error in investment analysis:', error);
            if (!silentRefresh) {
                throw error;
            }
        }
    }

    async fetchStockData(symbol, startDate) {
        const apiKey = 'P87EXAT1TEGBGNG3';
        const cacheKey = `${symbol}_${startDate}`;
        
        // Check cache first (cache for 1 hour)
        if (this.dataCache.has(cacheKey)) {
            const cachedData = this.dataCache.get(cacheKey);
            const cacheTime = cachedData.timestamp;
            const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds
            
            if (Date.now() - cacheTime < oneHour) {
                console.log('Using cached data for', symbol);
                return cachedData.data ? { data: cachedData.data, splits: cachedData.splits || [] } : cachedData;
            }
        }
        
        try {
            // Show API status
            this.showApiStatus('Fetching real-time data...');
            
            // Try to get split-adjusted data from Alpha Vantage
            const response = await fetch(
                `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${apiKey}&outputsize=full`
            );
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            
            // Check for API errors
            if (data['Error Message']) {
                throw new Error(data['Error Message']);
            }
            
            if (data['Note']) {
                console.warn('API rate limit reached, using cached data');
                return this.generateMockStockData(symbol, startDate);
            }
            
            // Process the real data
            const timeSeries = data['Time Series (Daily)'];
            if (!timeSeries) {
                throw new Error('No time series data available');
            }
            
            const processedData = this.processAlphaVantageData(timeSeries, startDate);
            const splitData = this.extractSplitData(timeSeries);
            
            // Cache the data
            this.dataCache.set(cacheKey, {
                data: processedData,
                splits: splitData,
                timestamp: Date.now()
            });
            
            console.log('Fetched fresh data for', symbol);
            this.showApiStatus('Real-time data loaded!');
            return { data: processedData, splits: splitData };
            
        } catch (error) {
            console.error('Error fetching real stock data:', error);
            console.log('Falling back to mock data');
            this.showApiStatus('Using simulated data');
            const mockData = this.generateMockStockData(symbol, startDate);
            return { data: mockData, splits: [] };
        }
    }

    processAlphaVantageData(timeSeries, startDate) {
        const data = [];
        const startDateObj = new Date(startDate);
        
        // Convert time series to array and filter by start date
        Object.keys(timeSeries)
            .filter(date => new Date(date) >= startDateObj)
            .sort((a, b) => new Date(a) - new Date(b))
            .forEach(date => {
                const dayData = timeSeries[date];
                data.push({
                    date: date,
                    close: parseFloat(dayData['5. adjusted close']), // Use adjusted close for split-adjusted prices
                    open: parseFloat(dayData['1. open']),
                    high: parseFloat(dayData['2. high']),
                    low: parseFloat(dayData['3. low']),
                    volume: parseInt(dayData['6. volume']),
                    splitCoefficient: parseFloat(dayData['8. split coefficient']) || 1.0
                });
            });
        
        return data;
    }

    extractSplitData(timeSeries) {
        const splits = [];
        
        Object.keys(timeSeries)
            .sort((a, b) => new Date(a) - new Date(b))
            .forEach(date => {
                const dayData = timeSeries[date];
                const splitCoeff = parseFloat(dayData['8. split coefficient']);
                
                if (splitCoeff && splitCoeff !== 1.0) {
                    splits.push({
                        date: date,
                        coefficient: splitCoeff,
                        ratio: this.formatSplitRatio(splitCoeff)
                    });
                }
            });
        
        return splits;
    }

    formatSplitRatio(coefficient) {
        if (coefficient > 1) {
            return `${coefficient}:1`;
        } else {
            return `1:${1/coefficient}`;
        }
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

    displayResults(product, metrics, silentRefresh = false) {
        // Show results section (only if not silent refresh)
        if (!silentRefresh) {
            document.getElementById('resultsSection').style.display = 'block';
            document.getElementById('error').style.display = 'none';
        }

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
        this.createChart(product, metrics.stockData, metrics.sharesPurchased, metrics.splits);
        
        // Display split information
        this.displaySplitInfo(metrics.splits);
    }

    displaySplitInfo(splits) {
        const splitInfoEl = document.getElementById('splitInfo');
        const splitListEl = document.getElementById('splitList');
        
        if (splits && splits.length > 0) {
            splitListEl.innerHTML = splits.map(split => `
                <div class="split-item">
                    <span class="split-date">${new Date(split.date).toLocaleDateString()}</span>
                    <span class="split-ratio">${split.ratio} Split</span>
                </div>
            `).join('');
            splitInfoEl.style.display = 'block';
        } else {
            splitInfoEl.style.display = 'none';
        }
    }

    createChart(product, stockData, sharesPurchased, splits = []) {
        const ctx = document.getElementById('investmentChart').getContext('2d');
        
        if (this.chart) {
            this.chart.destroy();
        }

        const labels = stockData.map(d => new Date(d.date).toLocaleDateString());
        const stockPrices = stockData.map(d => d.close);
        const investmentValues = stockData.map(d => d.close * sharesPurchased);

        // Create split annotations
        const splitAnnotations = splits.map(split => ({
            type: 'line',
            mode: 'vertical',
            scaleID: 'x',
            value: new Date(split.date).toLocaleDateString(),
            borderColor: '#ff6b6b',
            borderWidth: 2,
            borderDash: [5, 5],
            label: {
                content: `${split.ratio} Split`,
                enabled: true,
                position: 'top'
            }
        }));

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
                aspectRatio: 2,
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
                    },
                    annotation: {
                        annotations: splitAnnotations
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

    showApiStatus(status) {
        // Add a small status indicator for API calls
        const statusEl = document.createElement('div');
        statusEl.id = 'apiStatus';
        statusEl.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            font-size: 12px;
            z-index: 1000;
            display: none;
        `;
        
        if (!document.getElementById('apiStatus')) {
            document.body.appendChild(statusEl);
        }
        
        const el = document.getElementById('apiStatus');
        el.textContent = status;
        el.style.display = 'block';
        
        setTimeout(() => {
            el.style.display = 'none';
        }, 3000);
    }
}

// Register Chart.js plugins
Chart.register(ChartAnnotation);

// Initialize the app when the page loads
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new ShouldaStocksApp();
});

// Clean up intervals when page is unloaded
window.addEventListener('beforeunload', () => {
    if (app) {
        app.stopDataRefresh();
    }
});
