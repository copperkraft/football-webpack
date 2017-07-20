import playerMapper from 'models/player/player-mapper';
import {teamPlayersRepository} from 'data/team-players-repository';

export const teamPlayers = {
    get(teamId, pagination) {
        return teamPlayersRepository.get(teamId, pagination).then(data => data.map(playerMapper));
    }
};