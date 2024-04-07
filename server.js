const cors_anywhere = require('cors-anywhere');
const http = require('http');
const host = process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost';
const port = process.env.PORT || 3000;

cors_anywhere.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});