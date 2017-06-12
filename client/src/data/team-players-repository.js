import request from 'data/request';

export const teamPlayersRepository = {
    get: teamId => {
        return request(`api/teams/${teamId}/players`).then(response => {
            return JSON.parse(response).sort((a, b) => a.jerseyNumber > b.jerseyNumber ? 1 : -1);
        });
    }
};