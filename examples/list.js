// create store
Vue.use(Vuex)
const store = new Vuex.Store()

// connect plugin
Vue.use(VueFastRest.plugin, {store})

const vm = new Vue({
  el: '#app',
  store,
  data: () => ({
    form: {
      first_name: ''
    }
  }),
  mounted() {
    // fetch data
    this.$store.dispatch(VueFastRest.REST.actions.updateUrlEndpoint, {
      endpoint: this.getEndpoint()
    })
  },
  computed: {
    // read store data
    items () {
      return this.$store.getters[VueFastRest.REST.getters.readUrlEndpoint](this.getEndpoint())
    },
    // get loading state for current endpoint
    loading () {
      return this.$store.getters[VueFastRest.REST.getters.readEndpointState](this.getEndpoint())
    }
  },
  methods: {
    addItem (type, item) {
      this.$store.dispatch(VueFastRest.REST.actions.createModel, {
        endpoint: this.getEndpoint(), // where put data
        offline: true, // create item in store only
        url: 'http://site.com/create', // used for send post response if offline = false
        action: (
          type === 'top'
          ? VueFastRest.REST.updateActions.prepend
          : VueFastRest.REST.updateActions.append
        ), // by default used append (data.push(item))
        data: this.form
      })
    },
    addItemAfter (item) {
      this.$store.dispatch(VueFastRest.REST.actions.createModel, {
        endpoint: this.getEndpoint(), // where put data
        offline: true, // create item in store only
        url: 'http://site.com/create', // used for send post response if offline = false
        action: VueFastRest.REST.updateActions.insertAfter,
        id: item.id || item._storeUUID, // id of item after each past data
        data: this.form
      })
    },
    removeItem(item) {
      this.$store.dispatch(VueFastRest.REST.actions.deleteModel, {
        endpoint: this.getEndpoint(), // where delete
        offline: true, // dont send response to server
        ids: [item.id || item._storeUUID]
      })
    },
    getEndpoint() {
      return 'https://faap-app.herokuapp.com/faap/v1/author'
    }
  }
})
