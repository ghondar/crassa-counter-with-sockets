import { WAIT_FOR_ACTION } from 'redux-wait-for-action'
import base from './base'
import produce from 'immer'

export default base({
  namespace   : 'crassa',
  store       : 'counter',
  initialState: {
    count: 0
  }
}).extend({
  types  : [ 'ADD_COUNT', 'REMOVE_COUNT', 'NEW_COUNT_FROM_SOCKET' ],
  reducer: (state, action, { types }) =>
    produce(state, draft => {
      switch (action.type) {
        case types.ADD_COUNT:
          draft.count++

          return
        case types.REMOVE_COUNT:
          draft.count--

          return

        case types.NEW_COUNT_FROM_SOCKET:
          const {
            payload: { count }
          } = action

          draft.count += count

          return
        default:
          return
      }
    }),
  selectors: ({ store }) => ({
    getCount: state => state[store].count
  }),
  creators: ({ types }) => ({
    addCount                     : () => ({ type: types.ADD_COUNT }),
    removeCount                  : () => ({ type: types.REMOVE_COUNT }),
    addCountFromServer           : () => ({ type: types.FETCH, [WAIT_FOR_ACTION]: types.FETCH_FULFILLED }),
    addCountToSocket             : () => ({ type: types.NEW_COUNT_FROM_SOCKET, event: true, payload: { count: 10 } }),
    addListenerCountFromSocket   : () => ({ type: types.NEW_COUNT_FROM_SOCKET, event: true, handle: true }),
    removeListenerCountFromSocket: () => ({ type: types.NEW_COUNT_FROM_SOCKET, event: true, leave: true })
  })
})
