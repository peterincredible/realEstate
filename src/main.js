import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core'
import 'bootstrap/dist/js/bootstrap.bundle'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes, faArrowDown, faHouse, faMagnifyingGlass, faNairaSign, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { registerScrollSpy } from 'vue3-scroll-spy'
import 'vue3-carousel/dist/carousel.css'
import 'animate.css'
library.add(faBars, faTimes, faArrowDown, faHouse, faMagnifyingGlass, faNairaSign, faTwitter, faFacebook, faInstagram, faLinkedin, faCheck)
const app = createApp(App)
registerScrollSpy(app)
app.component('font-awesome-icon', FontAwesomeIcon)
// app.use(VueCarousel)

app.mount('#app')
