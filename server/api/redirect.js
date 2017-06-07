const http = require('http');

module.exports = function (options, response) {
    const externalRequest = http.request(options, function(externalResponse) {
        externalResponse.setEncoding('utf8');

        externalResponse.on('data', function(chunk){
            response.write(chunk);
        });

        externalResponse.on('close', function(){
            response.writeHead(externalResponse.statusCode);
            response.end();
        });

        externalResponse.on('end', function(){
            response.end();
        });
    });

    externalRequest.on('error', function(e) {
        console.log(e.message);
        response.writeHead(500);
        response.end();
    });

    externalRequest.end();
};
