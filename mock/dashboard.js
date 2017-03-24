import { color } from '../src/utils/theme'
import mockStorage from '../src/utils/mockStorage'

const Mock = require('mockjs');

let dataKey = mockStorage('Dashboard', Mock.mock({
  user: {
    name: 'admin',
    email: 'admin@sselab.com'
  }
}));

module.exports = {
  'GET /api/dashboard' (req, res) {
    res.json(global[dataKey]);
  }
}
