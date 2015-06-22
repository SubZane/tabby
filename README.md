Ajaxnavbar 0.1.0
==================
Tabby.js is a tiny (1.4kb) tab menu script with support for AJAX loading of content. It will also take advantage of hashed URLs, meaning: If you click one tab, then another and use the back button the previous tab will be selected.

<div style="text-align:center">
<img src="https://github.com/SubZane/tabby/raw/master/demo/img/logo.png" alt="tabby.js"/>
</div>

##Browser Support
* Google Chrome
* Internet Explorer 9+
* Firefox
* Safari 6+

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
```javascript
$('#id_of_your_div').tabby();
```

###Settings and Defaults
```javascript
options: {
  onInit: function () {},
  onLoad: function () {},
  onDestroy: function () {}
};
```
* `onInit`: Executes when initialized.
* `onLoad`: Executes when finished loading all buttons and counts.
* `onDestroy`: Executes when plugin is removed/destroyed.

###Required data-attributes and elements.
* `data-for`: Required. This is for tabby to know where the tab content are located.
* `data-target`: Required. For tabby to know what tab content to activate when this tab is selected.
* `data-tab`: Required. Name of the tab. Should correspond with the `data-target`.
* `data-ajaxcontent`: Optional. If you want to load content using AJAX instead of inline content use this and supply it with a path to the content.

###Typical setup
This could be your typical script setup for some tabs.

```javascript
jQuery(document).ready(function($) {
  $('#tabby').tabby();
});
```

```html
<nav id="tabby" class="tabby-tabs" data-for="example-tab-content">
  <ul>
    <li><a data-target="tab1" class="active" href="#tab1">Tab 1</a></li>
    <li><a data-target="tab2" href="#tab2">Tab 2</a></li>
    <li><a data-target="tab3" href="#tab3">Tab 3</a></li>
  </ul>
</nav>

<div class="tabby-content" id="example-tab-content">
  <div data-tab="tab1">
    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula</p>
  </div>
  <div data-tab="tab2">
    <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
  </div>
  <div data-tab="tab3" data-ajaxcontent="ajaxcontent.html">
    <div class="loading"></div>
  </div>
</div>
```

##change log
####0.5.0
* First real public release
