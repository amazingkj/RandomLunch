var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//추가한 부분
var mysql = require('mysql');
// Connection 객체 생성 
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

// router.get('/', function (req, res) {
//   connection.query('SELECT * FROM Restaurant', function (err, rows) {
//     if (err) throw err;
//     res.send(rows);
//   });
// });



// regist 
router.post('/regist', function (req, res){
  console.log('[POST] req.body: ', req.body);
  console.log('[POST] req.body.Distance: ', req.body.restaurant.Distance);
  const params = req.body;
  const query = 'INSERT INTO Restaurant (Name, MainMenu, Distance, Nat) VALUES ("'+params.restaurant.rname+'","'+params.restaurant.MainMenu+'","'+params.restaurant.Distance+'","'
  + params.restaurant.Nat + '")'
  
  const restaurant = {
    'rname': params.restaurant.rname,
    'MainMenu': params.restaurant.MainMenu,
    'Distance': params.restaurant.Distance,
    'Nat': params.restaurant.Nat,
  };
  console.log('[POST] store regist query: ', query);
  connection.query(query, restaurant, function (err,result) {
     if (err) {
       console.error(err);
      throw err;
     }
     console.log(result);
     res.status(200).send('success');
     
  });  
});



// rlist 
/* router.post('/rlist', function  (req, res){
  connection.query('SELECT * FROM Restaurant', (err, result) => {
    res.status(200).send('success');
    res.send({ result });
     if (err) {
      console.error(err);
     throw err;
    } else{


    }
 
  });  
});
 */

 // rlist 
router.get('/rlist', function  (req, res){
  // console.log('[GET] req.body: ', req.body);
   console.log('[GET] req.body: ', res.body);
   const query = 'SELECT * FROM Restaurant'
 
   console.log('[GET] store regist query: ', query);
   connection.query(query, (err, result) => {
 
     if (err) {
       console.error(err);
      throw err;
     } else{
       console.log(res);
       console.log(result);
       res.status(200).send('success');
       res.send({ success:true, result:result });
     }
 
   });  
 });
 
// // rlistcnt
// router.post('/rlistcnt', function (req, res){
//   console.log('[POST] res.body: ', res.body);
//   console.log('[POST] res.body.Distance: ', res.body.restaurant.Distance);
//   const params = res.body;
//   const query = 'SELECT * FROM Restaurant'
  
//   const restaurant = {
//     'id': params.restaurant.id,
//     'rname': params.restaurant.rname,
//     'MainMenu': params.restaurant.MainMenu,
//     'Distance': params.restaurant.Distance,
//     'Nat': params.restaurant.Nat,
//     'Date': params.restaurant.Date,
//   };
//   console.log('[POST] store regist query: ', query);
//   connection.query(query, restaurant, function(err,result) {
//     if (!err) {
//       res.send({ result });
//       res.status(200).send('success');
//       console.log(result);
//     } else console.log(err);

    
     
//   });  
//});


module.exports = router;