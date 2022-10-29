const express = require('express')
const compression = require('compression')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const flash = require('connect-flash')
var http = require('http');

//const apiRouter = require('../controller/api/index_controller').router
const webRouter = require('../controller/web/index').router

const app = express()

app.use(compression()) // added compression
app.set('views', path.join(__dirname, '..', 'views'))
app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '..', '/assets/')))


app.use(flash())


var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

//app.use('/api', apiRouter)
app.use('/web', webRouter)
app.get('/', (req, res) => res.redirect('/web/inicio'))

var server = http.createServer(app);
server.listen(port);

server.on('error', onError);
server.on('listening', onListening);


function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }
  
  /**
   * Event listener for HTTP server "error" event.
   */
  
  function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
  
  /**
   * Event listener for HTTP server "listening" event.
   */
  
  function onListening() {

    console.log("Servidor creado en el puerto 3000")
  }
  