# grunt-html2amd

> A task to convert HTML templates to AMD javascript

Sample:

** main.html **
```html
<div><p id="Para1">Paragraph</p></div>

```
Output -> ** main.html.js **
```js
define(function(){ return '<div><p id="Para1">Paragraph</p></div>' });
```

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-html2amd --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-html2amd');
```

## The "html2amd" task

### Overview
In your project's Gruntfile, add a section named `html2amd` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  html2amd: {
    your_target: {
      src:// wild card or array of html files
    },
  },
});
```

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  html2amd: {
    dist: {
      src: ["pages/*/*.html","templates/*.html"]
    }
  }
});
```

The plugin would output a separate ** .js ** file for each html input file ( appending .js extention to the original name ).

For example: ** pages/main/main.html **  would output: ** pages/main/main.html.js **

