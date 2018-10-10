# French Verbs List

A json file that contains all verbs that exist in French language sorted by conjugation groups.

## Install

`npm install --save french-verbs-list`

## Use

```js
const verbs = require('french-verbs-list');

console.log(verbs.firstGroup); // array of verbs of the first group
console.log(verbs.secondGroup); // array of verbs of the second group
console.log(verbs.thirdGroup); // array of verbs of the third group

console.log(verbs.all); // array of all verbs, flattened
```

## Contribution

This is a work in progress. Please contribute if you find a verb missing.
