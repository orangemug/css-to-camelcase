# css-to-camelcase
Convert css property to the camel case version

[![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)][stability]
[![circleci](https://circleci.com/gh/orangemug/css-to-camelcase.png?style=shield)][circleci]
[![Dependency Status](https://david-dm.org/orangemug/css-to-camelcase.svg)][dm-prod]
[![Dev Dependency Status](https://david-dm.org/orangemug/css-to-camelcase/dev-status.svg)][dm-dev]

[stability]: https://github.com/orangemug/stability-badges#stable
[circleci]:  https://circleci.com/gh/orangemug/css-to-camelcase
[dm-prod]:   https://david-dm.org/orangemug/css-to-camelcase
[dm-dev]:    https://david-dm.org/orangemug/css-to-camelcase#info=devDependencies


## Usage
Example usage

```js
var cssToCC = require("css-to-camelcase");
var out = cssToCC("-webkit-column-count");
assert.equal(out, "webkitColumnCount");
```


## License
MIT
