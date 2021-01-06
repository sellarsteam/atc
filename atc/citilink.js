// Copyright 2020, Sellars
// Licensed under the Apache License, Version 2.0

var pid = new URL(window.location.href).searchParams.get('pid');  // Parse pid

if (pid && pid == parseInt(pid)) {  // Validate id

    fetch(`https://www.citilink.ru/basket/add/product/${pid}/?amount=1`, {  // Add product to cart
        'credentials': 'include',
        'headers': {
            'Accept': '*/*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        'method': 'GET',
        'mode': 'no-cors'
    }).then(() => window.location.href = 'https://www.citilink.ru/order/');  // Go to checkout
} else {
    window.location.href = '/';  // Go to homepage if id validation failed
}