export default function Competitor (dataObject) {
    this.id = parseInt(dataObject._links.team.href.match(/\d+$/)[0], 10);
    this.position = dataObject.position;
    this.name = dataObject.teamName;
    this.games = dataObject.playedGames;
    this.goals = dataObject.goals;
    this.goalsAgainst = dataObject.goalsAgainst;
    this.wins = dataObject.wins;
    this.draws = dataObject.draws;
    this.losses = dataObject.losses;
    this.points = dataObject.points;
    this.imageUrl = dataObject.crestURI;
}

