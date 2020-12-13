// Copyright 2020, Sellars
// Licensed under the Apache License, Version 2.0


var id = new URL(window.location.href).searchParams.get('id');  // Parse item id
var s = new URL(window.location.href).searchParams.get('size');  // Parse size


if (id && id == parseInt(id) && s) {  // Validate id and size

    fetch("https://www.basketshop.ru/js/additem.php", {
        "body": `item_id=${id}&s=${s}&act=AddItem`,
        'credentials': 'include',
        'headers': {
            'Accept': '*/*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        'method': 'POST',
        'mode': 'no-cors'
    }).then(() => window.location.href = 'https://www.basketshop.ru/catalog/basket/');  // Go to checkout

} else {
    window.location.href = '/';  // Go to homepage if id validation failed
}
