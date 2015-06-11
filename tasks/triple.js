/*
 * grunt-triple-quotes
 * https://github.com/bigfactory/grunt-triple-quotes
 *
 * Copyright (c) 2015 xiaocong.hxc
 * Licensed under the MIT license.
 */

'use strict';

var chalk = require('chalk');
var path = require('path');

module.exports = function(grunt) {

    grunt.registerMultiTask('triple', 'triple quotes multi lines', function() {
        var options = this.options({});

        this.files.forEach(function(f) {
            var src;

            src = f.src.map(function(srcFile) {

                var destFile, srcCode;

                if(f.dest){
                    destFile = path.join(f.dest, srcFile);
                }
                else{
                    destFile = srcFile;
                }

                srcCode = grunt.file.read(srcFile);
                srcCode = replace(srcCode);

                grunt.file.write(destFile, srcCode);
                grunt.log.writeln('File ' + chalk.cyan(destFile) + ' updated');
                
            });


        });
    });

};

function replace(code){
    code = code.replace(/'''([\s\S]*)'''/g, function(){
        return "'" + arguments[1].replace(/\r/g, '\\\r').replace(/\n/g, '\\\n') + "'";
    });

    return code;
}