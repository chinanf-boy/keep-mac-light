# keep-mac-light [![Build Status](https://travis-ci.org/chinanf-boy/keep-mac-light.svg?branch=master)](https://travis-ci.org/chinanf-boy/keep-mac-light) [![codecov](https://codecov.io/gh/chinanf-boy/keep-mac-light/badge.svg?branch=master)](https://codecov.io/gh/chinanf-boy/keep-mac-light?branch=master) [![explain](http://llever.com/explain.svg)](https://github.com/chinanf-boy/keep-mac-light-explain)

> keep mac light no down

[中文](./readme.md) | ~~[english](./readme.en.md)~~

## Install



```
npm i -g keep-mac-light
```




## Usage

```js
const keepMacLight = require('keep-mac-light');

keepMacLight('unicorns');
//=> 'unicorns & rainbows'
```


## API

### keepMacLight(input, [options])

#### input

name: | input
---------|----------
Type: | `string`
Desc: | Lorem ipsum.

#### options

##### foo

 name: | foo
---------|----------
Type: | `boolean`
Default: | `false`
Desc: | Lorem ipsum.


## CLI

```
npm install --global keep-mac-light
```

```
$ keep-mac-light --help

  Usage
    keep-mac-light [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ keep-mac-light
    unicorns & rainbows
    $ keep-mac-light ponies
    ponies & rainbows
```


## License

MIT © [chinanf-boy](http://llever.com)
