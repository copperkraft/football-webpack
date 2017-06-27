import playerMapper from 'models/player/player-mapper';
import {teamPlayersRepository} from 'data/team-players-repository';

export const teamPlayers = {
    get(teamId) {
        return teamPlayersRepository.get(teamId).then(data => data.map(playerMapper));
    }
};