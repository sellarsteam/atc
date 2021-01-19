// Copyright 2020, Sellars
// Licensed under the Apache License, Version 2.0


var id = new URL(window.location.href).searchParams.get('id'); // Parse Id


if (id && id == parseInt(id)) {  // Validate params

    fetch(`https://www.svyaznoy.ru/cart/add?product[${id}]=1&type=ajax`, {
        "credentials": "include",
        "headers": {
            "Accept": "*/*",
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        "referrer": "https://www.svyaznoy.ru/catalog/accessories/8089/4063193",
        "method": "GET",
        "mode": "no-cors"
    }).then(() => window.location.href = 'https://www.svyaznoy.ru/cart');  // Go to checkout
} else {
    window.location.href = '/';  // Go to homepage if id validation failed
}