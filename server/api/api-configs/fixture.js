const paramsBuilder = require('./builders/football-api-params-builder');

module.exports = {
    params(params) {
        return paramsBuilder(`fixtures/${params.id}`, true);
    },
    mapper(data) {
        return {
            date: data.fixture.date,
            status: data.fixture.status,
            homeTeamName: data.fixture.homeTeamName,
            awayTeamName: data.fixture.awayTeamName,
            goalsHomeTeam: data.fixture.result.goalsHomeTeam,
            goalsAwayTeam: data.fixture.result.goalsAwayTeam,
            odds: data.fixture.odds,
            stat: {
                homeTeamWins: data.head2head.homeTeamWins,
                awayTeamWins: data.head2head.awayTeamWins,
                draws: data.head2head.draws
            },
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
    }
};
