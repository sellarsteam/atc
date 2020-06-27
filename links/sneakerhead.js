// Copyright 2020, Sellars
// Licensed under the Apache License, Version 2.0


var id = new URL(window.location.href).searchParams.get('id');  // Parse id
var quantity = new URL(window.location.href).searchParams.get('q');  // Parse quantity


if (id && id == parseInt(id)) {  // Validate id
    if (!quantity || quantity != parseInt(quantity) || quantity < 1) quantity = 1;  // Validate quantity

    fetch('https://sneakerhead.ru/local/templates/.default/ajax/ajax.php', {  // Add product to cart
        'body': `action=ADD2BASKET&id=${id}&quantity=${quantity}`,
        'credentials': 'include',
        'headers': {
            'Accept': '*/*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        'method': 'POST',
        'mode': 'no-cors'
    }).then(function() {
        window.location.href = 'https://sneakerhead.ru/checkout/';  // Go to checkout
    });
} else {
    window.location.href = '/';  // Go to homepage if id validation failed
}