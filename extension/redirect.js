var HANGOUTS_URL = 'https://hangouts.google.com/?hl=en&ht=0&hcb=0&hs=84&hmv=1&action=chat&pn=NUMBER'

var params = new URLSearchParams(document.location.search.substring(1));
var tel = params.get('tel');
var number = tel.substring(4);

window.location.replace(HANGOUTS_URL.replace('NUMBER', number), '_self');
