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

  setHeader () {
  },

  query (resource, params) {
  },

  get (resource, slug = '') {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`)
    })
  },

  post (resource, params) {
  },

  update (resource, slug, params) {
  },

  put (resource, params) {
  },

  delete (resource) {
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
    console.log('res')
    console.log(res)
    return res.data
  }
}
