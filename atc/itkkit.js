// Copyright 2020, Sellars
// Licensed under the Apache License, Version 2.0


var id = new URL(window.location.href).searchParams.get('id');  // Parse item id


if (id && id == parseInt(id)) {  // Validate id and size

    fetch("https://www.itkkit.ru/ajax/cart/addItem.php", {
        "body": `product_id=${id}&quantity=1&fuser_id=false&refresh_small=true`,
        'credentials': 'include',
        'headers': {
            'Accept': '*/*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        'method': 'POST',
        'mode': 'no-cors'
    }).then(() => window.location.href = 'https://www.itkkit.ru/checkout/');  // Go to checkout

} else {
    window.location.href = '/';  // Go to homepage if id validation failed
}