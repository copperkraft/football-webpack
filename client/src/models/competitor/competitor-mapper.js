import Competitor from './competitor';

export default dataObject => {
    return new Competitor({
        id: parseInt(dataObject._links.team.href.match(/\d+$/)[0], 10),
        position: dataObject.position,
        name : dataObject.teamName,
        games: dataObject.playedGames,
        goals : dataObject.goals,
        goalsAgainst : dataObject.goalsAgainst,
        wins : dataObject.wins,
        draws : dataObject.draws,
        losses : dataObject.losses,
        points : dataObject.points,
        imageUrl : dataObject.crestURI
    });
};

