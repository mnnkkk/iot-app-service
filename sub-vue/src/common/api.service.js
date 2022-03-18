import { MockSvcLists } from './MockData'

const ApiService = {
  init () {
  },

  setHeader () {
  },

  query (resource, params) {
  },

  get (resource, slug = '') {
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
  get () {
    return MockSvcLists
  }
}
