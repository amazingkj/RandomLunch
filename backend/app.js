
var createError = require('http-errors');
const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cors = require('cors');//교차통신 모듈 호출

const app = express();
var port = '3002';

app.set('port', (process.env.PORT || 3002));
app.listen(port, () => {
  console.log(`Exampl e app listening on port ${port}`);
});


//추가한 부분
var mysql = require('mysql');
// Connection 객체 생성 c
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',   
  password: '123456',
  database: 'lunch'
});  
// Connect
connection.connect(function (err) {   
  if (err) {     
    console.error('mysql connection error');     
    console.error(err);     
    throw err;   
  } 
});
// insert
// app.post('/regist', function (req, res) {
//   var user = {
//     'userid': req.body.userid,
//     'name': req.body.name,
//     'address': req.body.address
//   };
//   var query = connection.query('insert into users set ?', user, function (err, result) {
//     if (err) {
//       console.error(err);
//       throw err;
//     }
//     res.status(200).send('success');
//   });
// });
// view engine setup


const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser=bodyParser.urlencoded({extended:false})

app.use(jsonParser);
app.use(urlencodedParser);



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use(cors()); //교차 통신 적용
module.exports = app;
