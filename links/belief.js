// Copyright 2020, Sellars
// Licensed under the Apache License, Version 2.0


var id = new URL(window.location.href).searchParams.get('id');  // Parse id

if (id && id == parseInt(id)) {  // Check for NaN and validate type
    fetch('https://beliefmoscow.com/cart_items.json', {   // Add product to cart
        'body': `variant_id=${id}&quantity=1`,
        'credentials': 'include',
        'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        'method': 'POST',
        'mode': 'no-cors'
    }).then(function () {
        window.location.href = 'https://store.beliefmoscow.com/new_order';  // Go to checkout
    });
} else {
    window.location.href = '/';  // Go to homepage if request is wrong
}