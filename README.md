# vue-fast-rest


[Docs](https://grinat.github.io/vue-fast-rest/docs/index.html)

## Examples

[List](https://grinat.github.io/vue-fast-rest/examples/list.html)

## Install
Install from npm 
```
npm i vue-fast-rest --save
```

Connect to vue
```js
// import store from './store' // <-- get your Vuex instance

import {plugin} from 'vue-fast-rest'
Vue.use(plugin, { store }) // <-- connect plugin
```

Or if you use without npm from cdn and etc
```js
// create store
Vue.use(Vuex)
const store = new Vuex.Store()

// connect plugin
Vue.use(VueFastRest.plugin, {store})
```

## Usage

```vue
<template>
  <div>
    <div class="items">{{items}}</div>
    <div class="statuses">
    creating: {{loading.create}}
    reading: {{loading.read}}
    updating: {{loading.update}}
    deleting: {{loading.delete}}
    </div>
  </div>
</template>
<script>
import {REST} from 'vue-fast-rest'

export default {
  computed: {
    // read store data
    items () {
      return this.$store.getters[REST.getters.readUrlEndpoint](this.getEndpoint())
    },
    // get loading state for current endpoint
    loading () {
      return this.$store.getters[REST.getters.readEndpointState](this.getEndpoint())
    }
  },
  mounted() {
    // fetch data
    this.$store.dispatch(REST.actions.updateUrlEndpoint, {
       endpoint: this.getEndpoint()
    })
  },
  methods: {
    getEndpoint() {
      return 'https://site.com/authors'
    },
    createItem () {
      this.$store.dispatch(REST.actions.createModel, {
         endpoint: this.getEndpoint(),
         url: 'https://site.com/author/create',
         data: {
           title: 'Foo',
           author: 'Bar'
         }
      })
    },
    removeItem (item) {
      this.$store.dispatch(REST.actions.deleteModel, {
         endpoint: this.getEndpoint(),
         url: 'https://site.com/author/delete/' + item.id,
         ids: [item.id]
      })
    },
    updateItem (item) {
      this.$store.dispatch(REST.actions.updateModel, {
         endpoint: this.getEndpoint(),
         url: 'https://site.com/author/update/' + item.id,
         id: item.id,
         data: {
           title: 'Update'
         }
      })
    }
  }
}
</script>
```

