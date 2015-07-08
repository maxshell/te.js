## te.js

Simple Javascript library used to work with HTML5 templates 
(see [W3C Specification](http://www.w3.org/TR/html5/scripting-1.html#the-template-element)) 
 
## Examples: 
  
There is the template that contains properties of simple model: 
    
    <template id="templatemodel">
      <img id="imgmodel" alt="{{altvalue}}" src="{{srcvalue}}" /> 
      <div id="divmodel" class="commentmodel">{{textvalue}}</div> 
    </template> 

To activate it use the following syntax: 
 
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

* 'body' - CSS-selector of the DOM element to which the template will be appended
* '#templatemodel' - CSS-selector of the template
* options object - {'placeholder-name':'value'}

Activation means that placeholders are filled with provided values and
whole template is appended to existing DOM element ("template" element itself
is ommited from resulting markup).

The one is also able to initialize the template without activation: 

    te.init(
      '#templatemodel',
      {'altvalue':'Cool image', 'srcvalue':'2.png', 'textvalue':'Hello, World!'}
      ); 
    te('body', '#templatemodel');

Having another example that just has empty attributes and node values: 

    <template id="mytemplate">      
      <img src="" alt="great image /> 
      <div class="comment"></div> 
    </template> 
 
To activate it you need to provide an array of options in the following format:

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

* {'s':'CSS-selector of element', 'a':'attribute name', 'v':'value'}
* To add child element use 'innerHTML' value for 'a' key 

The approach with initialization/activation is also supported: 
 
    te.init('#mytemplate', [{'s':'img','a':'src','v':'1.png'}]); 
    te.init('#mytemplate', [{'s':'.comment','a':'innerHTML','v':'Hello, World!'}]);

After that you can activate the initialized template:
    
    te('body', '#mytemplate');

Finally the one could create the template that contains model values and initialize it using 
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