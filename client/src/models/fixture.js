export default function Fixture (dataObject) {
    dataObject =  {

    };

    this.id = dataObject.id;
    this.date = dataObject.date;
    this.homeTeamName = dataObject.homeTeamName;
    this.awayTeamName = dataObject.awayTeamName;
    this.goalsHomeTeam = dataObject.result.goalsHomeTeam;
    this.goalsAwayTeam = dataObject.result.goalsAwayTeam;
}
