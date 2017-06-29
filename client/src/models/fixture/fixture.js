export default class Fixture {
    constructor(params = {}) {
        this.id = params.id;
        this.date = params.date;
        this.homeTeamName = params.homeTeamName;
        this.awayTeamName = params.awayTeamName;
        this.goalsHomeTeam = params.goalsHomeTeam;
        this.goalsAwayTeam = params.goalsAwayTeam;
        this.isFinished = params.isFinished;
    }
}
