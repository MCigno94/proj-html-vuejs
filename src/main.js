import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/* Font Awesome icons*/
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faMagnifyingGlass, faChevronRight, faRightLong, faFileLines, faMugSaucer, faCubes, faTv, faWrench, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { faApple, faWindows, faAndroid, faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faMagnifyingGlass, faChevronRight, faRightLong, faFileLines, faApple, faWindows, faAndroid, faMugSaucer, faCubes, faTv, faWrench, faFacebookF, faTwitter, faInstagram, faYoutube, faChevronUp);

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

/* Bootstrap */
const bootstrap = require('bootstrap');
Vue.use(bootstrap);

new Vue({
    render: h => h(App),
}).$mount('#app')