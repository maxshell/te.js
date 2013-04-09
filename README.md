## el.js

Simple Javascript library used to work with HTML5 templates	
(see [W3C Specification](https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/templates/index.html)) 
 
## Examples: 
	
Having the template: 
 
<template id="mytemplate"> 
  <img src="" alt="great image"> 
  <div class="comment"></div> 
</template> 
 
To activate it use the following syntax 
 
	te('#mytemplate', 'body', [{'s':'img','a':'src','v':'1.png'},{'s':'.comment','a':'innerHTML','v':'Hello, World!'}]); 
    => 
    <body> 
    <template id="mytemplate"> 
      <img src="1.png" alt="great image"> 
      <div class="comment">Hello, World!</div> 
    </template> 
    </body> 

Inspired by [HTML's New Template Tag](http://www.html5rocks.com/en/tutorials/webcomponents/template/)