# bookmarklets

pinboard with referrer:
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
paste the source code into a bookmark's `url` field to create a bookmarklet

currently only `github.js`, which toggles between a repo's source and docs
(`gh-pages`)

broken on firefox + https github:

    CSP WARN: Directive inline script base restriction violated

also see [rawgithub](https://github.com/rgrove/rawgithub)
