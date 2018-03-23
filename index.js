let express = require('express')
let app = express()
let pather = require('path')
let server = require('http').Server(app)
let io = require('socket.io')(server)
let ip = require('ip')
let Siofu = require('socketio-file-upload')
app.use(Siofu.router)
app.use(express.static(pather.join(__dirname, 'public')))
app.use(express.static('/dev/shm'))
app.get('/', function (req, res) {
  res.sendFile(pather.join(__dirname, 'views', 'index.html'))
})
var userConnected = 0
io.on('connection', function (socket) {
  userConnected += 1
  console.log('new user connected:' + userConnected)
  io.emit('consoleUpdate', 'we just connect')
  socket.on('disconnect', function () {
    userConnected -= 1
    console.log('user disconnected:' + userConnected)
  })
})
server.listen(3000, function () {
  console.log('check it at: http://' + ip.address() + ':3000')
})

// version test 22
