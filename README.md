# vue-fast-rest

## Examples

[List](https://grinat.github.io/vue-fast-rest/examples/list.html)

## Install
Install from npm 
```
npm i vue-fast-rest
```

Connect to vue
```
// import store from './store' // <-- get your Vuex instance

import {plugin} from 'vue-fast-rest'
Vue.use(plugin, { store }) // <-- connect plugin
```

Or if you use without npm from cdn and etc
```
// create store
Vue.use(Vuex)
const store = new Vuex.Store()

// connect plugin
Vue.use(VueFastRest.plugin, {store})
```

## Usage

