# caller-dirname

Get the directory name of a caller function's containing file.

---

### Installation

```bash
$ npm i caller-dirname
```

### Usage

/home/detrohutt/test/caller-dirname/callee.js

```javascript
import callerDirname from 'caller-dirname';

export default () => callerDirname();
```

/home/detrohutt/test/caller-dirname/deeper/caller.js

```javascript
import thisDirname from '../callee.js';

console.log(thisDirname()); /* /home/detrohutt/test/caller-dirname/deeper */
```

### Options

| Option | Default | Description                                                                                                                                                                                                                                                                                                                                   |
| ------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| depth  | 1       | Depth sets the position in the call stack at which you want to retrieve the directory name. With the default depth of 1 (1st caller) you get the dirname of the function that directly calls `callerDirname()` (we'll call it `fn1`). With a depth of 2 (2nd caller), you'd instead get the dirname of the function that _called_ `fn1`, etc. |

##### Example

```javascript
import callerDirname from 'caller-dirname';

export const thirdCallerDir = () => callerDirname({ depth: 3 });
```

### Motivation

I needed this for another repo I'm working on. Most of the code is taken from [caller-path](https://github.com/sindresorhus/caller-path/blob/master/index.js). The main difference is this returns the dirname only, rather than the full path with filename and extension. Also, it's published both as a CommonJS module and as an ES Module and includes TypeScript typings.
