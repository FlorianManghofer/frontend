import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App)

app.use(router)

const vuetify = createVuetify({
  components,
  directives,
})

// Vuetify in die App einhängen
app.use(vuetify)

app.mount('#app')
