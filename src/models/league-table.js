/**
 * Created by uladzimir.yakushkin on 06-Jun-17.
 */
const ko = require('knockout');

const Competitor = require('models/competitor');
const leagueTableData = require('data/league-table-data');

module.exports = leagueTitle => {
    const leagueTable = ko.observableArray();
    leagueTableData(leagueTitle).then(data => leagueTable(data.map(item => new Competitor(item))));
    return leagueTable;
};