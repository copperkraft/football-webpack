import ko from 'knockout';

import Player from 'models/team';
import {teamPlayersRepository} from 'data/team-players-repository';

export const teamPlayers = {
    get: leagueTitle => {
        const leagueTeams = ko.observableArray();
        teamPlayersRepository.get(leagueTitle).then(data => leagueTeams(data.map(item => new Player(item))));
        return leagueTeams;
    }
};