// Copyright 2020, Sellars
// Licensed under the Apache License, Version 2.0


var id = new URL(window.location.href).searchParams.get('id');  // Parse id
var quantity = new URL(window.location.href).searchParams.get('q');


if (id && id == parseInt(id)) {  // Validate id
    if (!quantity || quantity != parseInt(quantity) || quantity < 1) quantity = 1; // Validate quantity

    fetch('https://api.tsum.ru/cart/item', {  // Add product to cart
        'body': `id=${id}&type=sku&quantity=${quantity}`,
        'credentials': 'include',
        'headers': {
            'Accept': '*/*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        'method': 'POST',
        'mode': 'no-cors'
    }).then(function () {
        window.location.href = 'https://www.tsum.ru/cart/';  // Go to checkout
    });
} else {
    window.location.href = '/';  // Go to homepage if id validation failed
}