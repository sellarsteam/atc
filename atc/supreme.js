// Copyright 2020, Sellars
// Licensed under the Apache License, Version 2.0


var style = new URL(window.location.href).searchParams.get('style');  // Parse style
var size = new URL(window.location.href).searchParams.get('size');  // Parse size


if (style && style == parseInt(style) && size && size == parseInt(size)) {  // Validate style & size
    fetch(`https://www.supremenewyork.com/shop/${size}/add.json`, {  // Add product to cart
        'body': `utf8=%E2%9C%93&style=${style}&size=${size}&commit=add+to+basket`,
        'credentials': 'include',
        'headers': {
            'Accept': '*/*;q=0.5, text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
            'Content-Type': 'content-type: application/x-www-form-urlencoded; charset=UTF-8'
        },
        'method': 'POST',
        'mode': 'no-cors'
    }).then(() => window.location.href = 'https://www.supremenewyork.com/checkout');  // Go to checkout
} else {
    window.location.href = '/';  // Go to homepage if style & size validation failed
}