// ==UserScript==
// @name       Picture Changer
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  changes pictures in mixpanel
// @copyright  2012+, You
// @match https://mixpanel.com/report/*/explore/
// ==/UserScript==

window.addEventListener("hashchange", function(){
    if(window.location.hash.indexOf('#user') != -1){
      var labelElt = document.querySelector('.name_contents > span[title="Picture"]');
    if(labelElt!=null) {
      var pictureURL = labelElt.parentNode.parentNode.parentNode.querySelector('.value_contents a').href;
        document.querySelector('.avatar').innerHTML="<div style='background-image:url("+pictureURL+"); min-height: 96px; min-width: 96px; background-size:cover'></div>";
    }
    }
}, false);

