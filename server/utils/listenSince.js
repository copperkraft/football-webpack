const http = require('http');

module.exports = function listenSince(port, app) {
    const server = http.createServer(app).listen(port);
    server.on('error', (error) => {
        console.error('error: ' + error.message);
        listenSince(port + 1, app);
    });
};