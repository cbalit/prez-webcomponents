/******** SHADOW DOM TEST ***************************/
var shadow = document.querySelector('#shadowHost').createShadowRoot();
shadow.innerHTML = '<h1>In Shadow</h1>' +
    '<h2><content select=".title"></content></h2>'+
    '<section><content select="*"></content></section>';


/******** TEMPLATE TEST ***************************/
var t = document.querySelector('#mytemplate1');
// Populate the src at runtime.
t.content.querySelector('img').src = 'img/templates_64x64.png';
t.content.querySelector('#comment').innerHTML = 'My new comment';

var clone = document.importNode(t.content, true);
document.querySelector('#forTemplate1').appendChild(clone);


/******** STYLING TEST ***************************/
var button = document.querySelector('#hostButton');
var root = button.createShadowRoot();
root.innerHTML = '<style>' +
    ':host { text-transform: uppercase; }' +
    ':host {opacity: 0.4;transition: opacity 420ms ease-in-out;}'+
    ':host(.red) {color: red;}'+
    ':host(:hover) {opacity: 1;}'+
    '</style>' +
    '<content></content>';



var host = document.querySelector('#hostDiv');
var root = host.createShadowRoot();
root.innerHTML = "<span>Shadow DOM</span>";