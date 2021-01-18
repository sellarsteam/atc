// Copyright 2020, Sellars
// Licensed under the Apache License, Version 2.0


var product_id = new URL(window.location.href).searchParams.get('product_id');  // Parse id
var option1 = new URL(window.location.href).searchParams.get('option1');  // Parse option1
var option2 = new URL(window.location.href).searchParams.get('option2');  // Parse option2


if (product_id && product_id == parseInt(product_id) && option1 && option1 == parseInt(option1) && option2 && option2 == parseInt(option2)) {  // Validate params

    fetch('https://sneaker-street.ru/index.php?route=checkout/cart/add', {  // Add product to cart
        'body': `product_id=${product_id}&quantity=1&option[${option1}]=${option2}`,
        'credentials': 'include',
        'headers': {
            'Accept': '*/*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        'method': 'POST',
        'mode': 'no-cors'
    }).then(() => window.location.href = 'https://sneaker-street.ru/checkout');  // Go to checkout
} else {
    window.location.href = '/';  // Go to homepage if id validation failed
}