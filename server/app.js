//app.js
const http = require('http');
const Todo = require('./controllers');
const { getReqData } = require('./utils');
const url = require('url');
const fs = require('fs');

const PORT = process.env.PORT || 5000;
let rawdata = fs.readFileSync('db.json');
let student = JSON.parse(rawdata);

// Create Variable with Base64 Image String
// var imageString = student[25].author.avatar;
// let base64String = imageString; // Not a real image

// // Remove header
// let base64Image = base64String.split(';base64,').pop();

// fs.writeFile('image3.png', base64Image, { encoding: 'base64' }, function (err) {
//   console.log('File created');
// });

const server = http.createServer(async (req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const page = queryObject.page ? parseInt(queryObject.page) : 0;
  const per_page = queryObject.per_page ? parseInt(queryObject.per_page) : 0;
  // /api/todos : GET
  if (req.url === `/api/todos/?page=${page}&per_page=${per_page}` && req.method === 'GET') {
    // get the todos.
    const todos = await new Todo().getTodos();
    if (page <= 1) {
      const PaginationTodos = todos.slice(page, per_page);
    } else {
      const PaginationTodos = todos.slice(per_page, per_page * page);
    }
    // set the status code, and content-type
    res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    // send the data
    res.end(JSON.stringify(constPaginationTodos));
  }

  // /api/todos/:id : GET
  else if (req.url.match(/\/api\/todos\/([0-9]+)/) && req.method === 'GET') {
    try {
      // get id from url
      const id = req.url.split('/')[3];
      // get todo
      const todo = await new Todo().getTodo(id);
      // set the status code and content-type
      res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      // send the data
      res.end(JSON.stringify(student.slice(25, 67)));
    } catch (error) {
      // set the status code and content-type
      res.writeHead(404, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
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
