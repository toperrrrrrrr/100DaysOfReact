# Day 10

`import { useState } from "react";`

```
import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("");
}
```

Notice that again, we are destructuring the returned values from `useState`.

The first value, `color`, is our current state.

The second value, `setColor`, is the function that is used to update our state.

These names are variables that can be named anything you would like.

I will continue on studying the useEffect tomorrow