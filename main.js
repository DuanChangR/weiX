import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import uView from "uni_modules/uview-ui";
Vue.use(uView);

Vue.prototype.$BASRUL = 'http://192.168.55.168:3000'

import request from '@/static/js/request.js'
Vue.prototype.$request = request

import {
	getUserData
} from '@/static/js/common.js'
Vue.prototype.$getUserData = getUserData

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif