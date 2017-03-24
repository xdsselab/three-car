import dva from 'dva'
import { useRouterHistory } from 'dva/router'
import { createHashHistory } from 'history'
import './index.html'

// initialize
const app = dva({
  history: useRouterHistory(createHashHistory)({ queryKey: false })
});

// model
app.model(require('./models/app'));

// router
app.router(require('./router'));

// start
app.start('#root');
