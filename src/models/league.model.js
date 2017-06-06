/**
 * Created by uladzimir.yakushkin on 31-May-17.
 */
const ko = require('knockout');

let leagueIds = ko.observable({
    "English Premier League": 426,
    "German 1. Bundesliga": 430,
    "Spanish Primera": 436,
    "Italian Serie A": 438,
    "French League 1": 434
});



module.exports = {
    list: ko.observableArray([
        "English Premier League",
        "German 1. Bundesliga",
        "Spanish Primera",
        "Italian Serie A",
        "French League 1"
    ]),
    loadLeague: leagueTitle => {
        let response = ko.observable();
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            {
                response(JSON.parse(xmlHttp.responseText));
            }
        };

        xmlHttp.open("GET", `http://localhost:3000/table/${leagueIds()[leagueTitle]}`, true);
        xmlHttp.send(null);
        return response;
    },
    loadTeams: leagueTitle => {
        let response = ko.observable();
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            {
                response(JSON.parse(xmlHttp.responseText));
            }
        };

        xmlHttp.open("GET", `http://localhost:3000/teams/${leagueIds()[leagueTitle]}`, true);
        xmlHttp.send(null);
        return response;
    }
};