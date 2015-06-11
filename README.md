# grunt-triple-quotes

> 

## Environment
Grunt `~0.4.5`

## Install
```
$ npm install grunt-triple-quotes --save-dev
```

## Config
```
grunt.loadNpmTasks('grunt-triple-quotes');
```

## Task Config

```
grunt.initConfig({
    triple: {    
        replace: {
            files: [{
                cwd: '<%= opt.temp %>',
                src: ['**/*.js', '!**/*-min.js'],
                dest: '<%= opt.temp %>'
            }]
        }
    }
});
```

## Usage

```
$ grunt triple:replace
```

### Source

```

var tpl = '''
  <h1>{{user.name}}</h1>
  <p>{{user.text}}</p>
''';
```

will turn out to:

```

var tpl = '''\
  <h1>{{user.name}}</h1>\
  <p>{{user.text}}</p>\
''';
```