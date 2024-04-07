const cors_anywhere = require('cors-anywhere');

cors_anywhere.createServer({
    originWhitelist: ['https://uratest.site'], // Allow requests from 'https://uratest.site'
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(function () {
    console.log('Running CORS Anywhere');
});