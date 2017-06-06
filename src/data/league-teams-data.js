/**
 * Created by uladzimir.yakushkin on 05-Jun-17.
 */
const request = require('data/xhr');
const leagueIds = require('data/indexes');

module.exports = leagueTitle => {
    return request(`http://localhost:3000/teams/${leagueIds[leagueTitle]}`).then(response => {
        return JSON.parse(response).teams.sort((a, b) => a.shortName > b.shortName ? 1 : -1);
    });
};
