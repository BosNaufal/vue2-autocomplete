# Vue 2 Autocomplete
Autocomplete Component For [Vue 2](http://vuejs.org). It's based on [vue-autocomplete](https://github.com/BosNaufal/vue-autocomplete)

<p align="center">
  <a href="./" title="Vue Autocomplete">
    <img src="./src/img/demo.gif" alt="vue Autocomplete component" title="Vue Autocomplete Component"/>
  </a>
</p>

## Install
You can import [vue2-autocomplete.vue](./src/js/components/vue-autocomplete.vue) to your vue component file like [this](./src/js/components/app.vue) and process it with your preprocessor.

You can install it via NPM
```bash
npm install vue2-autocomplete-js
```

Or Just put it after Vue JS~
```html
<script src="https://vuejs.org/js/vue.min.js"></script>
<script src="./dist/vue2-autocomplete.js"></script>
<script>
  // Don't Forget to register it
  new Vue({
    components: {
      autocomplete: Vue2Autocomplete
    }
  });
</script>
```

## Import Style
Don't forget to import vue 2 css. You can link it via html
```html
<link rel="stylesheet" href="vue2-autocomplete/dist/style/vue2-autocomplete.css">
```

Or You can import it using commonJS

```javascript
require('vue2-autocomplete-js/style/vue2-autocomplete.css')
```

Its style is very customizable. You can put any CSS over it. And You can add custom class via its prop.


## Import Module
```javascript
import Autocomplete from 'vue2-autocomplete-js'
// Or
var Autocomplete = require('vue2-autocomplete-js');
```

## Usage
```html
<template>

  <autocomplete
    url="http://localhost/proyek/goodmovie/api/api/v1/search"
    anchor="title"
    label="writer"
    :on-select="getData">
  </autocomplete>

</template>


<script>

  import Autocomplete from 'vue2-autocomplete-js';

  export default {

    components: { Autocomplete },

    methods: {
      getFiles(obj){
        console.log(obj);
      }
    }
  };

</script>
```

Full Props
```html
<template>

  <autocomplete
    url="http://localhost/proyek/goodmovie/api/api/v1/search"
    anchor="title"
    label="writer"
    :on-select="getData"

    id="custom id"
    class-name="custom class name"
    placeholder="placeholder"
    :init-value="initial value"
    :init-value="initial value"
    :custom-params="{ token: 'dev' }"
    :min="3"

    :on-input="callbackEvent"
    :on-show="callbackEvent"
    :on-blur="callbackEvent"
    :on-hide="callbackEvent"
    :on-focus="callbackEvent"
    :on-select="callbackEvent"
    :on-before-ajax="callbackEvent"
    :on-ajax-progress="callbackEvent"
    :on-ajax-loaded="callbackEvent">
  </autocomplete>

</template>
```

## Props
#### url* (String)
the URL must be active (not from file). the component will fetch JSON from this URL and passing one params (default : `q`) query. like:
```
http://some-url.com/API/list?q=
```
There are no filter and limit action inside the component. So, do it in your API logic.


#### params (String)
name of the search parameter to query in Ajax call. default is `q=`


#### min (Number)
Minimum input typed chars before performing the search query. default is `0`


#### anchor* (String)
It's a object property name that passed by your API. It's used for Anchor in suggestions list. Example `anchor="name"` will get the name property of your JSON object. Like ("Bambang", "Sukijan", "Bejo") in the demo above.


#### label (String)
Same as anchor but it's used for subtitle or description of list


#### placeholder (String)
Placeholder for input

#### className (String)
Custom class name for autocomplete component

#### id (String)
Custom id name for autocomplete component



## Callback Events
You can make a callback event via props.

#### onInput (Function)
On Input event in autocomplete

#### onShow (Function)
On Show event in autocomplete list

#### onBlur (Function)
When autocomplete is blured

#### onHide (Function)
When autocomplete list is hidden

#### onFocus (Function)
When autocomplete input in focus mode

#### onSelect (Function)
When user has selected one item in the list

#### onBeforeAjax (Function)
Before the ajax send

#### onAjaxProgress (Function)
While ajax is fetching the data

#### onAjaxLoaded (Function)
When ajax process is totally loaded


## Methods
You can do some methods by accessing the component via javascript.
```javascript
this.$refs.autocomplete.someMethod()
```

#### setValue (String)
To set the value of the autocomplete input



## Thank You for Making this useful~

## Let's talk about some projects with me
Just Contact Me At:
- Email: [bosnaufalemail@gmail.com](mailto:bosnaufalemail@gmail.com)
- Skype Id: bosnaufal254
- twitter: [@BosNaufal](https://twitter.com/BosNaufal)

## License
[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2016 - forever Naufal Rabbani
