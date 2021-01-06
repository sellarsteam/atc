// Copyright 2020, Sellars
// Licensed under the Apache License, Version 2.0


var id = new URL(window.location.href).searchParams.get('id');  // Parse id


if (id && id == parseInt(id)) {  // Validate id

    fetch('https://shop.mts.ru/api/v1/cart/add', {  // Add product to cart
        "headers": {
          "accept": "*/*"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `{\"id\":\"${id}\"}`,
        "method": "POST",
        "mode": "no-cors",
        "credentials": "include"
    }).then(() => window.location.href = 'https://shop.mts.ru/personal/basket');  // Go to checkout
} else {
    window.location.href = '/';  // Go to homepage if id validation failed
}