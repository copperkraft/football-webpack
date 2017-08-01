import Fixture from './fixture';

export default dataObject => dataObject ? new Fixture({
    id: dataObject.id,
    date: new Date(dataObject.date),
    homeTeamName: dataObject.homeTeamName,
    awayTeamName: dataObject.awayTeamName,
    goalsHomeTeam: dataObject.result.goalsHomeTeam,
    goalsAwayTeam: dataObject.result.goalsAwayTeam,
    isFinished: dataObject.status === 'FINISHED'
}) : null;

