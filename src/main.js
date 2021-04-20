import Vue from 'vue'

import store from './store'
import { getData } from './import.js'
Vue.use(getData(store))

//import Map from './components/Map'
import DataBox from './components/DataBox'
import LineChart from './components/LineChart'
import BarChart from './components/BarChart'

Vue.config.productionTip = false

import vueCustomElement from 'vue-custom-element'

Vue.use(vueCustomElement)

//Vue.customElement('da-map', Map)
Vue.customElement('data-box', DataBox)
Vue.customElement('line-chart', LineChart)
Vue.customElement('bar-chart', BarChart)