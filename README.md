# vue-fast-rest
[![Travis CI status](https://api.travis-ci.org/grinat/vue-fast-rest.svg?branch=master)](https://travis-ci.org/grinat/vue-fast-rest)

[Docs](https://vue-fast-rest.netlify.com/)

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

## Requirements

Rest API with arrays of data should always be returned in the format:
```json
{
  "data": [
     {"id": 1, "price": 1},
     {"id": 2, "title": "foo"}
  ],
  // optional data, need for pagination
  "_meta": {
     "totalCount": 2, 
     "currentPage": 1,
     "pageCount": 1,
     "perPage": 20
  }
}
```
For one item:
```json
{"id": 1, "price": 1}
```

If you have other format, you can use adapters for convert data:
```js
this.$store.dispatch(REST.actions.updateUrlEndpoint, {
  endpoint: this.getEndpoint(),
  params: {
    transformResponse: [function (data) {
      // Do whatever you want to transform the data
      return data
    }]
  }
})
```

