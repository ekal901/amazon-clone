import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
library.add(faBars, faSearch, faShoppingCart);
library.add(faBell)
Vue.component('font-awesome-icon', FontAwesomeIcon)
