module.exports = {
    params: params => {
        return {
            //http://api.football-data.org/v1/teams/66/fixtures
            uri: `http://api.football-data.org/v1/teams/${params.id}/players`,
            method: 'GET',
            headers: {
                'x-auth-token': 'ea247d3972de4c13b075ae1b61b88d72',
                'x-response-control': 'minified'
            },
            json: true
        };
    },
    converter: data => {
        return data.players;
    }
};