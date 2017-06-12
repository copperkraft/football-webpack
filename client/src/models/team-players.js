import ko from 'knockout';

import Player from 'models/player';
import {teamPlayersRepository} from 'data/team-players-repository';

export const teamPlayers = {
    get: teamId => {
        const teamPlayers = ko.observableArray();
        teamPlayersRepository.get(teamId).then(data => teamPlayers(data.map(item => new Player(item))));
        return teamPlayers;
    }
};