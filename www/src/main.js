import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Hello from './components/Hello.vue'
import Home from './components/Home.vue'
import Dashboard from './components/Dashboard.vue'
import Cordova from './components/Cordova.vue'

Vue.use(VueRouter)

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new VueRouter()

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
router.map({
  '/hello': {
    component: Hello
  },
  '/home': {
    component: Home
  },
  '/dashboard': {
    component: Dashboard
  },
  '/cordova': {
    component: Cordova
  }
})
// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, 'app')


