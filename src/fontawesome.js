import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faSearch, faShoppingCart, faMapMarkerAlt, faSortUp, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons'
library.add(faBars, faSearch, faShoppingCart, faMapMarkerAlt, faSortUp, faGlobe);
library.add(faBell)
library.add(faCanadianMapleLeaf)
Vue.component('font-awesome-icon', FontAwesomeIcon)
