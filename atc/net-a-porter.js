// Copyright 2020, Sellars
// Licensed under the Apache License, Version 2.0

var id = new URL(window.location.href).searchParams.get('id');  // Parse id

if (id) {  // Validate id

    fetch(`https://www.net-a-porter.com/ru/en/api/basket/addsku/${id}.json`, {
        'headers': {
            'Accept': '*/*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        "mode": "no-cors",
        "method": "GET"
    }).then(() => window.location.href = 'https://www.net-a-porter.com/ru/en/shoppingbag.nap');  // Go to checkout
    
} else {
    window.location.href = '/';  // Go to homepage if id validation failed
}

// fetch("https://www.net-a-porter.com/ru/en/api/basket/addsku/1326747-036.json", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "en-US,en;q=0.9",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin"
//   },
//   "referrer": "https://www.net-a-porter.com/en-ru/shop/product/adidas-originals/yeezy-boost-380-primeknit-sneakers/1326747?shash=615a6cb990a180adf6e83c00b37befa1c284fcf528a3c90b130df7b99d0e571e",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "include"
// });