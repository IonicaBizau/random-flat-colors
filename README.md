
# random-flat-colors

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/random-flat-colors.svg)](https://www.npmjs.com/package/random-flat-colors) [![Downloads](https://img.shields.io/npm/dt/random-flat-colors.svg)](https://www.npmjs.com/package/random-flat-colors) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Get a random flat color from a group of colors.

## :cloud: Installation

```sh
$ npm i --save random-flat-colors
```


## :clipboard: Example



```js
const randomFlatColors = require("random-flat-colors");

console.log(randomFlatColors());
// => #ecf0f1

console.log(randomFlatColors(["orange", "red"]));
// => #e67e22

console.log(randomFlatColors("green"));
// => #7f8c8d

console.log(randomFlatColors("white,gray"));
// => #27ae60

let fn = randomFlatColors("white,gray", true);
console.log(fn());
// => #bdc3c7

console.log(fn());
// => #7f8c8d
```

## :memo: Documentation


### `randomFlatColors(groups, fn)`
Get a random flat color from a group of colors.

#### Params
- **Array** `groups`: An array of flat color groups. The supported group names are:
 - blue
 - teal
 - green
 - purple
 - dark
 - yellow
 - orange
 - red
 - white
 - gray
- **Boolean** `fn`: If `true`, the random function will be returned (not the color string).

#### Return
- **String|String** That flat color as hex, or the function if `fn` is true.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:


## :sparkles: Related

 - [`flat-colors-groupped`](https://github.com/IonicaBizau/flat-colors-groupped#readme)—Groupped flat colors by their range.
 - [`flat-colors`](https://github.com/IonicaBizau/flat-colors.js)—Find the nearest flat color for a RGB/Hex input.
 - [`smart-foreground`](https://github.com/IonicaBizau/smart-foreground#readme)—Calculate matching foreground colors based on backgorund colors.
 - [`rainbow-sort`](https://github.com/IonicaBizau/rainbow-sort#readme)—Sort a list of given colors in the rainbow order.



## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
