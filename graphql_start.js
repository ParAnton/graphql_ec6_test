// server.js
import express from 'express';
import path from 'path';

let app  = express();
//let PORT = 3g000;
let PORT = process.env.PORT

app.use(express.static(path.resolve(__dirname, 'client')));

app.post('/graphql', (req, res) => {
    console.log('Hello');
  res.send('Hello!');
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