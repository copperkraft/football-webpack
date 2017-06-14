module.exports = {
    params: params => {
        return {
            //http://api.football-data.org/v1/teams/66/fixtures
            uri: `http://api.football-data.org/v1/fixtures/${params.id}`,
            method: 'GET',
            headers: {
                'x-auth-token': 'ea247d3972de4c13b075ae1b61b88d72',
                'x-response-control': 'minified'
            },
            json: true
        };
    },
    converter: data => {
        const ret = {
            date: data.fixture.date,
            status: data.fixture.status,
            homeTeamName: data.fixture.homeTeamName,
            awayTeamName: data.fixture.awayTeamName,
            goalsHomeTeam: data.fixture.result.goalsHomeTeam,
            goalsAwayTeam: data.fixture.result.goalsAwayTeam,
            odds: data.odds,
            head2head: data.head2head.fixtures.map(fixture => {
                return {
                    date: fixture.date,
                    homeTeamName: fixture.homeTeamName,
                    awayTeamName: fixture.awayTeamName,
                    goalsHomeTeam: fixture.result.goalsHomeTeam,
                    goalsAwayTeam: fixture.result.goalsAwayTeam
                };
            })
        };
        return ret;
    }
};