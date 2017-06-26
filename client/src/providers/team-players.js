import ko from 'knockout';

import Player from 'models/player';
import {teamPlayersRepository} from 'data/team-players-repository';

export const teamPlayers = {
    get: teamId => {
        return teamPlayersRepository.get(teamId).then(data => data.map(item => new Player(item)));
    }
};