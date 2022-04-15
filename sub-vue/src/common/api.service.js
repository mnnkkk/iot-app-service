import { MockAppSvcConfig, MockSvcLists } from './MockData'
import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import { IS_ONLINE, API_URL } from './config'

const ApiService = {
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL
  },

  get (resource, slug = '') {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`)
    })
  },

  post (resource, params) {
    return Vue.axios.post(`${resource}`, params)
  }
}

export default ApiService

export const svcService = {
  async get () {
    if (!IS_ONLINE) {
      return MockSvcLists
    }
    const res = await ApiService.get('v2/registercenter/service', 'all')
    return res.data
  }
}

export const appServiceService = {
  async getAppSvcConfigBySvcKey (svcKey) {
    if (!IS_ONLINE) {
      return MockAppSvcConfig
    }
    const res = await ApiService.get('v2/appsvc/config/servicekey', svcKey)
    return res.data
  },
  async postAppSvcConfigBySvcKey (slug, payload) {
    if (!IS_ONLINE) {
      return true
    }
    const res = await ApiService.post(`v2/appsvc/deploy/servicekey/${slug}`, payload)
    return res.status === 200
  }
}
