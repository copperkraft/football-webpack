export default function Fixture (dataObject) {
    this.id = dataObject.id;
    this.date = new Date(dataObject.date);
    this.homeTeamName = dataObject.homeTeamName;
    this.awayTeamName = dataObject.awayTeamName;
    this.goalsHomeTeam = dataObject.result.goalsHomeTeam;
    this.goalsAwayTeam = dataObject.result.goalsAwayTeam;
    this.isFinished = dataObject.status === 'FINISHED';
}
