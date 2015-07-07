## te.js

Simple Javascript library used to work with HTML5 templates	
(see [W3C Specification](https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/templates/index.html)) 
 
## Examples: 
	
Having the template: 

    <template id="mytemplate">      
      <img src="" alt="great image /> 
      <div class="comment"></div> 
    </template> 
 
To activate it use the following syntax 
 
    te(
      'body',
      '#mytemplate',
      [{'s':'img','a':'src','v':'1.png'},{'s':'.comment','a':'innerHTML','v':'Hello, World!'}]
      ); 
    => 
    <body> 
    <template id="mytemplate"> 
      <img id="myimg" src="1.png" alt="great image"> 
      <div id="mydiv" class="comment">Hello, World!</div> 
    </template> 
    </body> 

To initialize the template without activation use the following syntax 
 
    te.init('#mytemplate', [{'s':'img','a':'src','v':'1.png'}]); 
    te.init('#mytemplate', [{'s':'.comment','a':'innerHTML','v':'Hello, World!'}]);

After that you can activate the initialized template
    
    te('body', '#mytemplate');

The templates that contain some simple model could also be activated: 
    
    <template id="templatemodel">
      <img id="imgmodel" alt="{{altvalue}}" src="{{srcvalue}}" /> 
      <div id="divmodel" class="commentmodel">{{textvalue}}</div> 
    </template> 

To activate it use the following syntax 
 
    te(
      'body',
      '#templatemodel',
      {'altvalue':'Cool image', 'srcvalue':'2.png', 'textvalue':'Hello, World!'}
      ); 
    => 
    <body> 
    <template id="templatemodel">
      <img id="imgmodel" alt="Cool image" src="2.png" /> 
      <div id="divmodel" class="commentmodel">Hello, World!</div> 
    </template>  
    </body>

The similar approach with initialization/activation is also supported: 

    te.init(
      '#templatemodel',
      {'altvalue':'Cool image', 'srcvalue':'2.png', 'textvalue':'Hello, World!'}
      ); 
    te('body', '#templatemodel');

Finally you can create the template that contains model values and initialize it using 
two different types of the attributes: 

    <template id="templatemixed">
      <img id="imgmixed" alt="{{altvalue}}" src="" /> 
      <div id="divmixed" class="commentmixed"></div> 
    </template> 

    te.init('#templatemixed', {'altvalue':'Cool image'}); 
    te.init('#templatemixed', [{ 's': '#imgmixed', 'a': 'src', 'v': '2.png' }]); 
    te.init('#templatemixed', [{ 's': '.commentmixed', 'a': 'innerHTML', 'v': 'Hello, World!' }]); 

    te('body', '#templatemixed'); 
    => 
    <body> 
    <template id="templatemixed">
      <img id="imgmixed" alt="Cool image" src="2.png" /> 
      <div id="divmixed" class="commentmixed">Hello, World!</div> 
    </template>  
    </body> 

Inspired by [HTML's New Template Tag](http://www.html5rocks.com/en/tutorials/webcomponents/template/)