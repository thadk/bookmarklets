# bookmarklets

pinboard with referrer:
------

Stacks with highlight-to-add description.

Example:  

     Title: OpenXC 
     URL: http://openxcplatform.com/
     Description: 
         refrr:http://t.co/xtDIl0vZvv
         (your selected text here)
     Tags: ford  api  arduino  car  development  hardware   


To install, make a new bookmark on your Bookmark bar by dragging the favicon from the URL bar into the bar then edit it and paste in the code. Make sure javascript is included.


-----

Github toggle between github.io domain and its repository
----

paste the source code into a bookmark's `url` field to create a bookmarklet

currently only `github.js`, which toggles between a repo's source and docs
(`gh-pages`)

broken on firefox + https github:

    CSP WARN: Directive inline script base restriction violated

also see [rawgithub](https://github.com/rgrove/rawgithub)
<ul><li><a href="javascript:(function() { function copyToClipboard(text) { if (window.clipboardData && window.clipboardData.setData) { /*IE specific code path to prevent textarea being shown while dialog is visible.*/ return clipboardData.setData("Text", text); } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) { var textarea = document.createElement("textarea"); textarea.textContent = text; textarea.style.position = "fixed"; /* Prevent scrolling to bottom of page in MS Edge.*/ document.body.appendChild(textarea); textarea.select(); try { return document.execCommand("copy"); /* Security exception may be thrown by some browsers.*/ } catch (ex) { console.warn("Copy to clipboard failed.", ex); return false; } finally { document.body.removeChild(textarea); } } } var cartotile = document.querySelectorAll('.leaflet-layer:nth-child(2) > .leaflet-tile-container > img:nth-child(1)')[0].src.replace(/cartocdn-gusc-(.)/,'cartocdn-gusc-{s}').replace(/([,\d]*)\/\d*\/\d*\/\d*.png/,'0,$1\/{z}\/{x}\/{y}.png'); copyToClipboard(cartotile); })();">CartoTile</a></li>
  <li><a href="javascript:q=location.href;if(document.getSelection)%7Bd=document.getSelection()+" refrr:"+document.referrer;%7Delse%7Bd='';%7D;p=document.title;void(open('https://pinboard.in/add?showtags=yes&url='+encodeURIComponent(q)+'&description='+encodeURIComponent(d)+'&title='+encodeURIComponent(p),'Pinboard','toolbar=no,scrollbars=yes,width=750,height=700'));">Pinboard with autofilled referrer</a></li>
  <li><a href="javascript:(function() {  var host = location.host.split('.');  var path = location.pathname.slice(2).split('/');    var winlocation = '' + window.location;    var isGISPath = /(gisModule\/)(dev\/app|dist)(\/)/;  var isDashboardPath = /(dashboard\/)(dev\/app|build)(\/)/;    if (isGISPath.exec(location.pathname)) {  window.location = isGISPath.exec(location.pathname)[2] == 'dist'    ? winlocation.replace(isGISPath,"$1dev/app$3")    : winlocation.replace(isGISPath,"$1dist$3");  }      else if (isDashboardPath.exec(location.pathname)) {    window.location = isDashboardPath.exec(location.pathname)[2] == 'build'    ? winlocation.replace(isDashboardPath,"$1dev/app$3")    : winlocation.replace(isDashboardPath,"$1build$3")  }  else {    window.location = host[2] === 'io'    ? 'https://github.com/' + host[0] + '/' + path[0] + '/tree/gh-pages'    : 'http://' + path[0] + '.github.io/' + path[1];  }})();">g.io Github io toggle</a></li></ul>
