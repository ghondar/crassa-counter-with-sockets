import io from 'socket.io-client'

export default function socketMiddleware() {
  const socket = io('http://localhost:5000')

  return ({ dispatch }) => next => action => {
    if(typeof action === 'function') return next(action)

    const { type, payload, event, leave, handle, ...rest } = action

    if(!event) return next(action)

    if(leave)
      return socket.removeListener(type)

    let handleEvent = handle
    if(handleEvent === true) handleEvent = payload => dispatch({ type, payload, ...rest })

    return handle && event ? socket.on(type, handleEvent) : socket.emit(type, payload)
  }
}
