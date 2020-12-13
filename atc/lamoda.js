// Copyright 2020, Sellars
// Licensed under the Apache License, Version 2.0

var id = new URL(window.location.href).searchParams.get('id');  // Parse id

if (id) {  // Validate id
    fetch(`https://www.lamoda.ru/cart/add/${id}`, {
        "body": null,
        "credentials": "include",
        "headers": {
            'Accept': '*/*',
            'Content-Type': 'application/x-www-form-urlencoded',
            "x-csrftoken": "zLpvcLfELuJPXw6M7jdmR4qQMspP8uxw",
            "x-requested-with": "XMLHttpRequest"
        },
        'method': 'POST',
        "referrerPolicy": "unsafe-url",
        'mode': 'no-cors'
    }).then(() => window.location.href = `https://www.lamoda.ru/checkout/cart/?add=${id}#old`);  // Go to checkout
} else {
    window.location.href = '/';  // Go to homepage if id validation failed
}
