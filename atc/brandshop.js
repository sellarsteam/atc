// Copyright 2020, Sellars
// Licensed under the Apache License, Version 2.0


var id = new URL(window.location.href).searchParams.get('id');  // Parse id
var option = new URL(window.location.href).searchParams.get('option');  // Parse option
var quantity = new URL(window.location.href).searchParams.get('q');  // Parse quantity


if (id && id == parseInt(id) && option && option == parseInt(option)) {  // Validate id & option
    if (!quantity || quantity != parseInt(quantity) || quantity < 1) quantity = 1;  // Validate quantity

    fetch('https://brandshop.ru/index.php?route=checkout/cart/add', {  // Add product to cart
        'body': `product_id=${id}&option_value_id=${option}&quantity=${quantity}`,
        'credentials': 'include',
        'headers': {
            'Accepts': '*/*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        'method': 'POST',
        'mode': 'no-cors'
    }).then(function () {
        window.location.href = 'https://brandshop.ru/checkout/';  // Go to checkout
    });
} else {
    window.location.href = '/';  // Go to homepage if id & option validation failed
}