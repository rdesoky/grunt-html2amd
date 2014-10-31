/*
 * grunt-html2amd
 * https://github.com/rdesoky/grunt-html2amd
 *
 * Copyright (c) 2014 Ramy Eldesoky
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('html2amd', 'A task to convert HTML templates to AMD javascript', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        var html = grunt.file.read(filepath);
        grunt.file.write(filepath + ".js",
            "define(function(){return '\\\n" +
            html.replace(/\'/g,"\\'").replace(/\r\n/g,"\n").replace(/\n/g,"\\\r\n") +
            "\\\r\n'});"
        );
        grunt.log.writeln('File "' + filepath + ".js" + '" created.');
      });

    });
  });

};
