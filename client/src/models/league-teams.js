/**
 * Created by uladzimir.yakushkin on 06-Jun-17.
 */

const ko = require('knockout');

const Team = require('models/team');
const leagueTeamsData = require('data/league-teams-data');

module.exports = leagueTitle => {
    const leagueTeams = ko.observableArray();
    leagueTeamsData(leagueTitle).then(data => leagueTeams(data.map(item => new Team(item))));
    return leagueTeams;
};