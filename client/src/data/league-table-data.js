/**
 * Created by uladzimir.yakushkin on 06-Jun-17.
 */
const request = require('data/xhr');
const leagueIds = require('data/indexes');

module.exports = leagueTitle => {
    return request(`api/table/${leagueIds[leagueTitle]}`).then(response => {
        return JSON.parse(response).standing;
    });
};