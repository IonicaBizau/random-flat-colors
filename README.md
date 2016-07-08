
# smart-flat-color

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/smart-flat-color.svg)](https://www.npmjs.com/package/smart-flat-color) [![Downloads](https://img.shields.io/npm/dt/smart-flat-color.svg)](https://www.npmjs.com/package/smart-flat-color) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Get a random flat color from a group of colors.

## :cloud: Installation

```sh
$ npm i --save smart-flat-color
```


## :clipboard: Example



```js
const smartFlatColor = require("smart-flat-color");

console.log(smartFlatColor());
// => #ecf0f1

console.log(smartFlatColor(["orange", "red"]));
// => #e67e22

console.log(smartFlatColor("green"));
// => #7f8c8d

console.log(smartFlatColor("white,gray"));
// => #27ae60
```

## :memo: Documentation


### `smartFlatColor(a, b)`
Get a random flat color from a group of colors.

#### Params
- **Number** `a`: Param descrpition.
- **Number** `b`: Param descrpition.

#### Return
- **Number** Return description.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
