// import a from './015.js'
// a()
// default 때문에 d가 나옴

// import {a, b, c} from './015.js'
// import d from './015.js'
// a()

// import * as all from './015.js'
// console.log(all)
// console.log(all.default())

import d, {a, b, c} from './015.js'

d()