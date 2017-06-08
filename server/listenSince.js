const http = require('http');

module.exports = function listenSince (port, app) {
    console.log(`listen ${port}`);

    const server = http.createServer(app).listen(port);
    server.on('error', (error) => {
        console.log('error: ' + error.message);
        listenSince(port + 1, app);
    });
};

