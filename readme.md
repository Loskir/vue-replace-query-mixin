# vue-replace-query-mixin

## Requirements
- vue 2.x
- vue-router 2.x

## Installation
`npm install --save vue-replace-query-mixin`

## Usage

```
// In the component
import replaceQuery from 'vue-replace-query-mixin'

export default {
  mixins: [replaceQuery],
  //...
}
```

`replaceQuery` method is now available in this component

## Example

URL: `https://example.com/abc?a=1&b=2`.

`this.replaceQuery({a: 100, b: null, c: 'foo'})`

URL: `https://example.com/abc?a=100&c=foo`

This will not be listed in history and will not trigger `beforeRouteUpdate` router hook

> this mixin is based on [`update-query`](https://github.com/kenberkeley/update-query)