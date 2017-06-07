/**
 * Created by uladzimir.yakushkin on 07-Jun-17.
 */
const express = require('express');
const app = express();

const http = require('http');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/table/:id', function(request, response) {
    const options = {
        host:   'api.football-data.org',
        path: `/v1/competitions/${request.params.id}/leagueTable`,
        method: 'GET',
        headers: {'x-auth-token': 'ea247d3972de4c13b075ae1b61b88d72'}
    };
    const externalRequest = http.request(options, function(externalResponse) {
        externalResponse.setEncoding('utf8');
        // wait for data
        externalResponse.on('data', function(chunk){
            response.write(chunk);
        });
        externalResponse.on('close', function(){
            // closed, let's end client request as well
            response.writeHead(externalResponse.statusCode);
            response.end();
        });
        externalResponse.on('end', function(){
            // finished, let's finish client request as well
            response.end();
        });
    });
    externalRequest.on('error', function(e) {
        // we got an error, return 500 error to client and log error
        console.log(e.message);
        response.writeHead(500);
        response.end();
    });

    externalRequest.end();
});

app.get('/teams/:id', function(request, response) {
    const options = {
        host:   'api.football-data.org',
        path: `/v1/competitions/${request.params.id}/teams`,
        method: 'GET',
        headers: {
            'x-auth-token': 'ea247d3972de4c13b075ae1b61b88d72',
            'x-response-control': 'minified'
        }
    };
    const externalRequest = http.request(options, function(externalResponse) {
        externalResponse.setEncoding('utf8');
        // wait for data
        externalResponse.on('data', function(chunk){
            response.write(chunk);
        });
        externalResponse.on('close', function(){
            // closed, let's end client request as well
            response.writeHead(externalResponse.statusCode);
            response.end();
        });
        externalResponse.on('end', function(){
            // finished, let's finish client request as well
            response.end();
        });
    });
    externalRequest.on('error', function(e) {
        // we got an error, return 500 error to client and log error
        console.log(e.message);
        response.writeHead(500);
        response.end();
    });

    externalRequest.end();
});


app.listen(3000, function () {
    console.log('listening...')
});