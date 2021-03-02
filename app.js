const
    path = require('path'),
    fs = require('fs'),
    http = require('http'),
    nodehttp = require('sys-nodehttp');

var server = new nodehttp.server({
    // a directory named web serves static content
    static: path.join(__dirname, 'public'),
    // request routes
    routes: [
        ['GET', '/', async(req, res) => {
            res.send(fs.readFileSync(path.join(__dirname, 'public', 'index.html'), 'utf8'));
        }],
        ['USE', async(req, res) => {
            res.status(404, res.send(fs.readFileSync(path.join(__dirname, 'public', 'index.html'), 'utf8')));
        }],
    ],
    port: process.env.PORT || 8080,
    address: '0.0.0.0',
});