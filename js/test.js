/******** SHADOW DOM TEST ***************************/
var shadow = document.querySelector('#shadowHost').createShadowRoot();
shadow.innerHTML = '<h1>Shadow content</h1>' +
    '<h2><content select=".title"></content></h2>'+
    '<section><content select="*"></content></section>';


/******** TEMPLATE TEST ***************************/
var t = document.querySelector('#mytemplate1');
// Populate the src at runtime.
t.content.querySelector('img').src = 'img/templates_64x64.png';
t.content.querySelector('#comment').innerHTML = 'img/templates_64x64.png';

var clone = document.importNode(t.content, true);
document.querySelector('#forTemplate1').appendChild(clone);
