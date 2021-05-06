// Copyright 2020, Sellars
// Licensed under the Apache License, Version 2.0


var reg = new URL(window.location.href).searchParams.get('reg');  // Parse region   
var lan = new URL(window.location.href).searchParams.get('lan');  // Parse language
var pid = new URL(window.location.href).searchParams.get('pid');  // Parse pid


if (pid && reg && lan) {  // Validate id

    fetch(`https://www.snipes.es/on/demandware.store/Sites-snse-SOUTH-Site/${reg}_${lan}/Cart-AddProduct?format=ajax`, {  // Add product to cart
        'body': `pid=${pid}&quantity=1`,
        'credentials': 'include',
        'headers': {
            'Accept': '*/*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        'method': 'POST',
        'mode': 'no-cors'
    }).then(() => window.location.href = `https://www.snipes.${reg}/cart`);  // Go to checkout
} else {
    window.location.href = '/';  // Go to homepage if id validation failed
}