require('newrelic');
const proxy = require('http-proxy-middleware');
const express = require('express');
let app = express();
const path = require('path');

const PORT = process.env.PORT||3000;


app.use(express.static('./'));
app.use(proxy('/api/restaurants', {target: 'http://13.52.226.238/'}));

// 3001
// app.get('/api/images', (req,res,next) => {
//   // let pid = req.params.pid;
//   // proxy.web(req,res, {target:`http://18.220.59.235/`});
// });

// //3002
// app.get('/api/articles', (req,res,next) => {
//   // let pid = req.params.pid;
//   // proxy.web(req,res, {target:`http://ec2-18-188-250-254.us-east-2.compute.amazonaws.com:3002/`});
// });

//3005
// app.get('/api/restaurants/:id', (req,res,next) => {
//   proxy.web(req,res, {target:`http://127.0.0.1:3005/`});
// });


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});