// fs
const fs = require('fs');
const path = require('path');

function x(params) {
    // let filePath = path.join(__dirname, './txt.1');

// if (fs.existsSync(filePath)){
//     fs.readFile(filePath, (err, data) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             let obj = data.toString();
//             console.log(obj);
//         }
//     });
// } else {
//     fs.writeFile(filePath, 'hello world', () => {});
// }

}

// http
// const http = require('http');

// // Create an HTTP tunneling proxy
// const server = http.createServer((req, res) => {
//     console.log(req, res);
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('<b>oke</b>');
// });

// server.listen(1337, '127.0.0.1');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var axios = require('axios');
const cheerio = require('cheerio')

app.use(bodyParser.raw());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/user/*/joe', function (req, res) {
    axios.get('https://people.onliner.by/2019/02/06/cardio').then(response => {
        console.log(response.data);
        const $ = cheerio.load(response.data);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const items = $('.news-media.news-media_condensed').html();
        res.end(items);
    })
});

function y() {
    // app
    const userRoute = app.post('/user');

    // user-routes.js
    userRoute.post('/:id/joe/:password', manageUser);

    // user-controller.js
    const manageUser = function (req, res) {
        console.log(req.params);
        if (req.params) {
            returnres.json({name: 'joe', boe: 'name'});
        }

        res.status(404);
        res.end();
    };
}

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
    });
