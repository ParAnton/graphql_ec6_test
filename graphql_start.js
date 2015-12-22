// server.js
import express from 'express';
import path from 'path';

import http from 'http';

import vehicleData from './graphqlserver/vehicles/vehicles';

let app  = express();
//let PORT = 3g000;
let PORT = process.env.PORT

app.use(express.static(path.resolve(__dirname, 'client')));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  next();
});


app.post('/vehicleGraphql', vehicleData);
app.get('/vehicleGraphql', vehicleData);
/*app.post('/graphql', (req, res) => {
    console.log('Hello');
  res.send('Hello!');
});*/
app.use('/vehicleGraphql',(req, res) => {
    console.log('Helg');
  res.send('pong');
});

app.get('/hej', (req, res) => {
    console.log('Helg');
  res.send('Helg!');
});

let server = app.listen(PORT, function () {
  //let host = server.address().address;
  //let port = server.address().port;
  
  let host = process.env.IP;
  let port = process.env.PORT;
  

  console.log('GraphQL listening at http://%s:%s', host, port);
});