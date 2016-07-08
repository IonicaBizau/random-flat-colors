## Documentation

You can see below the API reference of this module.

### `randomFlatColor(groups, fn)`
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

