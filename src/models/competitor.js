/**
 * Created by uladzimir.yakushkin on 06-Jun-17.
 */

module.exports = function Competitor (dataObject) {
    this.id = dataObject._links.team.href.slice(38); //костыль и магическое число!
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
};

