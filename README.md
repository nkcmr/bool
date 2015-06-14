### bool
cast truthy stuff to a boolean value
```javascript
var bool = require('@nkcmr/bool')
bool('true')  // => true
bool('yes')   // => true
bool('no')    // => false
bool('false') // => false
bool(0)       // => false
bool(1)       // => true
bool(-1)      // => false
```
theres more, check the code. it is pretty brief, but handy.
