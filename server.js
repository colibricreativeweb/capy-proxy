const cors_anywhere = require('cors-anywhere');
const http = require('http');
const host = 'localhost';
const port = 8080;

cors_anywhere.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});