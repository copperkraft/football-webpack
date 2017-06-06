/**
 * Created by uladzimir.yakushkin on 06-Jun-17.
 */
const request = require('data/xhr');
const leagueIds = require('data/indexes');

module.exports = leagueTitle => {
    return request(`http://localhost:3000/table/${leagueIds[leagueTitle]}`).then(response => {
        return JSON.parse(response).standing;
    });
};