Tabby.js 0.1.1
==================
Tabby.js is a tiny (1.1kb) tab menu script with support for AJAX loading of content and history navigation. It will also take advantage of hashed URLs, meaning: If you click one tab, then another and use the back button the previous tab will be selected. It takes advantage of Bootstrap markup and can very easily replace the normal Bootstrap javascript tabs.

<div style="text-align:center">
<img src="https://github.com/SubZane/tabby/raw/master/demo/img/logo.png" alt="tabby.js"/>
</div>

##Browser Support
* Google Chrome
* Internet Explorer 9+
* Firefox
* Safari 7+

##Installation
```
bower install tabbyjs --save
```

###Setup
```html
<!-- You'll need jquery -->
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<!-- and you'll need to include tabby of course! -->
<script src="jquery.tabby.min.js"></script>
```
##Usage
Tabby works exactly like the Tabs included in Bootstrap except that tabby also has support for history and ajax loading content. Just include the script on your page with the tabs and you're done!
As Bootstrap uses `data-toggle="tab"` tabby instead uses `data-tabbytoggle="tab"`. That's all you need to change.

###Using AJAX to load content
The tab panel you wish to load its content using AJAX need to have the attribute `data-ajax="myfile.html"`

###Typical setup
This could be your typical script setup for some tabs.

```html
<!-- Nav tabs -->
<ul class="nav nav-tabs" role="tablist">
  <li role="presentation" class="active"><a href="#tab_normal" aria-controls="tab_normal" role="tab" data-default="true" data-tabbytoggle="tab">Normal Tab</a></li>
  <li role="presentation"><a href="#tab_ajax" aria-controls="tab_ajax" role="tab" data-tabbytoggle="tab">AJAX Tab</a></li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="tab_normal">
    <p>This is a normal tab. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum.</p>
  </div>
  <div role="tabpanel" class="tab-pane" id="tab_ajax" data-ajax="ajaxcontent.html"></div>
</div>
```

##change log
####0.1.0
* First real public release
