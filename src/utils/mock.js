const Mock = require('mockjs')
const appMock = require('../../mock/app')
const dashboardMock = require('../../mock/dashboard')
const mockData = [appMock, dashboardMock]

function serialize (str) {
  let paramArray = str.split('&')
  let query = {}
  for (let i in paramArray) {
    query[paramArray[i].split('=')[0]] = paramArray[i].split('=')[1]
  }
  return query
}

for (let i in mockData) {
  for (let key in mockData[i]) {
    Mock.mock(eval(`/${key.split(' ')[1].replace(/\//g, '\\\/')}/`), key.split(' ')[0].toLowerCase(), (options) => {
      if (key.split(' ')[0].toLowerCase() === 'get') {
        let query = options.url.split('?')[1]
        let body = options.body
        options.query = query ? serialize(query) : (body ? serialize(body) : {})
      }

      let res = {}
      let result = {}

      res.json = function (data) {
        result = data
      }

      mockData[i][key](options, res)

      return result
    })
  }
}

Mock.setup({ timeout: '200-600' })
