// Copyright 2020, Sellars
// Licensed under the Apache License, Version 2.0


var style = new URL(window.location.href).searchParams.get('style');  // Parse style
var size = new URL(window.location.href).searchParams.get('size');  // Parse size
var pid = new URL(window.location.href).searchParams.get('pid');  // Parse pid


if (style && style == parseInt(style) && size && size == parseInt(size) && pid && pid == parseInt(pid)) {  // Validate style & size
    fetch(`https://www.supremenewyork.com/shop/${pid}/add`, {
    "credentials": "include",
    "headers": {
        "Accept": "*/*;q=0.5, text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        "Accept-Language": "en-US,en;q=0.5",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache"
    },
    "body": `utf8=%E2%9C%93&style=${style}&size=${size}&commit=add+to+basket`,
    "method": "POST",
    "mode": "cors"
    }).then(() => window.location.href = 'https://www.supremenewyork.com/checkout');  // Go to checkout
} else {
    window.location.href = '/';  // Go to homepage if style & size validation failed
}