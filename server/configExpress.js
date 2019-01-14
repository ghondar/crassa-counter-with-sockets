export default function(app) {
  const http = require('http').Server(app)
  const io = require('socket.io')(http)

  io.on('connection', socket => {
    socket.on('crassa/counter/NEW_COUNT_FROM_SOCKET', payload => {
      io.emit('crassa/counter/NEW_COUNT_FROM_SOCKET', payload)
    })
  })

  return http
}
