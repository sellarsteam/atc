
var code = new URL(window.location.href).searchParams.get('code');  // Parse style
var cid = new URL(window.location.href).searchParams.get('cid');  // Parse size
var targeturl = new URL(window.location.href).searchParams.get('targeturl');  // Parse size


if (code && code == parseInt(code) && cid && cid == parseInt(cid) && targeturl) {  // Validate style & size
    fetch("https://www.wildberries.ru/lk/product/addtobasket", {
    "body": `cod1S=${code}&characteristicId=${cid}&quantity=1&targetUrl=${targeturl}&source=`,
    "credentials": "include",
    "headers": {
        "Accept": "*/*",
        "Content-Type": "application/x-www-form-urlencoded",
    },
    "method": "POST",
    "mode": "no-cors"
}).then(() => window.location.href = 'https://www.wildberries.ru/lk/basket');  // Go to checkout
} else {
    window.location.href = '/';  // Go to homepage if style & size validation failed
}