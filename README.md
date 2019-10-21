# safe-get-prop
A function, which safely returns a property on any nested object layer

### Usage:

``` js
import { safeGetProp } from 'safe-get-prop';
const myObj = { prop1: { prop2: { prop3: 123 } } };
const ensureValue = 'nothing to show';
safeGetProp(myObj, 'prop1.prop2.prop3', ensureValue);
```

![safe-get-prop](./arrow_box.png)