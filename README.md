# snakecase-object-keys
Zero dependency open source code to convert object keys to snake case.

Usage
-----
```
npm install snakecase-object-keys

import { convert } from "snakecase-object-keys";
const input_object = {
    "ObjectKey":"value",
    "anotherKey":[ { "keyInside":"value" } ]
}
const output_object = convert(input_object);

```

License
-------
MIT


