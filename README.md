# next-dom-class
> Standalone dom class for next.


## install:
```bash
npm install -S afeiship/next-dom-class --registry=https://registry.npm.taobao.org
```

## apis:
| api      | params                  | description                                    |
|----------|-------------------------|------------------------------------------------|
| add      | (inElement, cls1, cls2) | Add className for element('cls1', 'cls1 cls2') |
| remove   | (inElement, cls1)       | Remove className from element                  |
| replace  | (inElement, cls1, cls2) | Replace className from element                 |
| toggle   | (inElement, cls1)       | Toggle className from element                  |
| contains | (inElement, cls1)       | Check if has className                         |

## usage:
```js
import NxDomClass from 'next-dom-class-list';

// code goes here:
// add:
NxDomClass.add(inElement,'cls1');
NxDomClass.add(inElement,'cls1 cls2');

// remove:
NxDomClass.remove(inElement,'cls1');

// replace:
NxDomClass.replace(inElement,'cls1','cls2');

// toggle:
NxDomClass.toggle(inElement,'cls1','cls2');

// contains:
NxDomClass.contains(inElement,'cls1');
```

## resources:
- https://github.com/afeiship
