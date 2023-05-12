javascript:(function() {  var menu = document.createElement('div');  var menuContent = document.createElement('div');  var closeButton = document.createElement('span');  var button = document.createElement('button');  menu.style.position = 'fixed';  menu.style.top = '20px';  menu.style.right = '20px';  menu.style.zIndex = '9999';  menu.style.backgroundColor = '#f7f7f7';  menu.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';  menu.style.borderRadius = '5px';  menu.style.width = '200px';  menuContent.style.padding = '10px';  closeButton.style.float = 'right';  closeButton.style.cursor = 'pointer';  closeButton.innerHTML = '&times;';  closeButton.onclick = function() {    menu.remove();  };  button.innerHTML = 'Launch ByeSecurly';  button.style.fontFamily = 'Arial';  button.style.fontSize = '16px';  button.style.color = '#fff';  button.style.backgroundColor = '#333';  button.style.padding = '10px 20px';  button.style.border = 'none';  button.style.borderRadius = '5px';  button.style.marginTop = '10px';  button.style.cursor = 'pointer';  button.onclick = function() {    var link = prompt("Enter link");    var proxy = 'https://api.codetabs.com/v1/proxy?quest=';    fetch(proxy + link)      .then((response) => response.text())      .then((text) => document.write(text));    var all = document.getElementsByTagName("*");    for (var i = 0, max = all.length; i < max; i++) {      if (all[i].src) {        all[i].src = new URL(all[i].src, link).href;        all[i].src = proxy + all[i].src;      }    }    window.onbeforeunload = function(e) {      e.preventDefault();      alert(e.toString());    };    function locationHashChanged(e) {      e.preventDefault();      alert(e);      window.location = new URL(e.oldURL, e.newURL).href;    }    window.onhashchange = locationHashChanged;  };  menuContent.appendChild(button);  menuContent.appendChild(closeButton);  menu.appendChild(menuContent);  document.body.appendChild(menu);  var isDragging = false;  var mouseOffset = { x: 0, y: 0 };  menuContent.addEventListener('mousedown', function(e) {    isDragging = true;    mouseOffset.x = e.pageX - menu.offsetLeft;    mouseOffset.y = e.pageY - menu.offsetTop;  });  document.addEventListener('mousemove', function(e) {    if (isDragging) {      menu.style.left = (e.pageX - mouseOffset.x) + 'px';      menu.style.top = (e.pageY - mouseOffset.y) + 'px';    }  });  document.addEventListener('mouseup', function() {    isDragging = false;  });})();