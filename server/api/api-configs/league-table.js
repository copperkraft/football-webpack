module.exports = {
    params: params => {
        return {
            uri: `http://api.football-data.org/v1/competitions/${params.id}/leagueTable`,
            method: 'GET',
            headers: {
                'x-auth-token': 'ea247d3972de4c13b075ae1b61b88d72'
            },
            json: true
        };
    },
    converter: data => {
        return data.standing;
    }
};