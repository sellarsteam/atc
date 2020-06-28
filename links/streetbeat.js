// Copyright 2020, Sellars
// Licensed under the Apache License, Version 2.0


var id = new URL(window.location.href).searchParams.get('id');  // Parse id
var quantity = new URL(window.location.href).searchParams.get('q');  // Parse quantity


if (id && id == parseInt(id)) {  // Validate id
    if (!quantity || quantity != parseInt(quantity) || quantity < 1) quantity = 1;  // Validate quantity

    fetch('https://street-beat.ru/local/components/multisite/order/ajax.php', {  // Add product to cart
        'body': `action=add&id=${id}&count=${quantity}`,
        'credentials': 'include',
        'headers': {
            'Accept': '*/*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        'method': 'POST',
        'mode': 'no-cors'
    }).then(function () {
        window.location.href = 'https://street-beat.ru/order/cart/';  // Go to checkout
    });
} else {
    window.location.href = '/';  // Go to homepage if id validation failed
}