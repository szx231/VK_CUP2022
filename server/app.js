//app.js
const http = require('http');
const Todo = require('./controllers');
const { getReqData } = require('./utils');
const url = require('url');
const fs = require('fs');

const PORT = process.env.PORT || 5000;
let rawdata = fs.readFileSync('db.json');
let student = JSON.parse(rawdata);
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Create Variable with Base64 Image String
// var imageString = student[25].author.avatar;
// let base64String = imageString; // Not a real image

// // Remove header
// let base64Image = base64String.split(';base64,').pop();

// fs.writeFile('image3.png', base64Image, { encoding: 'base64' }, function (err) {
//   console.log('File created');
// });

const server = http.createServer(async (req, res) => {
  if (req.url === `/api/todos` && req.method === 'POST') {
    // get the todos.
    const todos = await new Todo().getTodos();
    const queryObject = url.parse(req.url, true).query;
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });
    req.on('end', () => {
      console.log(JSON.parse(data).category1); // 'Buy the milk'
    });
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST OPTIONS',
      'Access-Control-Allow-Credentials': 'true',
    });
    res.end(JSON.stringify(student));
  }

  // /api/todos/:id : GET
  else if (req.url.match(/\/api\/message\/([0-9]+)/) && req.method === 'GET') {
    try {
      // get id from url
      const id = req.url.split('/')[3];
      // get todo
      const todo = await new Todo().getTodo(id);
      // set the status code and content-type
      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Credentials': 'true',
      });
      // send the data
      res.end(JSON.stringify(student[id]));
    } catch (error) {
      // set the status code and content-type
      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Credentials': 'true',
      });
      // send the error
      res.end(JSON.stringify({ message: error }));
    }
  }

  // No route present
  else {
    res.writeHead(404, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
