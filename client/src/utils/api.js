import axios from 'axios'

export default {
  // Gets all Websites
  getWebsites: function () {
    return axios.get('/api/website/')
  },
  // Get Website by Website Id
  getWebsiteById: function (id) {
    return axios.get('/api/website/' + id)
  },
  // Create Website
  createWebsite: function (data) {
    return axios.post('/api/website', data)
  },
  // Delete Website
  deleteWebsite: function (id) {
    return axios.delete('/api/website/' + id)
  }
}
