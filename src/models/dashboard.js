import { parse } from 'qs'
import { query } from '../services/dashboard'

export default {
  namespace: 'dashboard',
  state: {

  },
  subscriptions: {
    setup ({ dispatch }) {
      dispatch({ type: 'query' })
    },
  },
  effects: {
    * query ({
            payload,
        }, { call, put }) {
      const data = yield call(query, parse(payload))
      yield put({ type: 'querySuccess', payload: { ...data } })
    },
  },
  reducers: {
    querySuccess (state, action) {
      return {
        ...state,
        ...action.payload,
      }
    },
  },
}
