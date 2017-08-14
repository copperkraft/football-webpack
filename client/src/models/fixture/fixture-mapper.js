import Fixture from './fixture';

export default dataObject => {
    return dataObject ? new Fixture({
        id: dataObject.id,
        date: new Date(dataObject.date),
        homeTeamName: dataObject.homeTeamName,
        awayTeamName: dataObject.awayTeamName,
        //Used ternary instead of a Boolean because the number of goals can be 0
        goalsHomeTeam: dataObject.result ? dataObject.result.goalsHomeTeam : dataObject.goalsHomeTeam,
        goalsAwayTeam: dataObject.result ? dataObject.result.goalsAwayTeam : dataObject.goalsAwayTeam,
        isFinished: dataObject.status === 'FINISHED'
    }) : null;
};
