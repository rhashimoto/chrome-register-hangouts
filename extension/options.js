var button = document.querySelector('#register');
button.addEventListener('click', function(event) {
  var url = chrome.runtime.getURL('redirect.html?tel=%s');
  console.log('registering', url);
  navigator.registerProtocolHandler('tel', url, 'Register Hangouts extension handler');
});
