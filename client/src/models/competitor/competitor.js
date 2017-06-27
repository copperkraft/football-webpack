export default class Competitor {
    constructor(params) {
        this.id = params.id;
        this.position = params.position;
        this.name = params.name;
        this.games = params.games;
        this.goals = params.goals;
        this.goalsAgainst = params.goalsAgainst;
        this.wins = params.wins;
        this.draws = params.draws;
        this.losses = params.losses;
        this.points = params.points;
        this.imageUrl = params.imageUrl;
    }
}

