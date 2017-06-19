import request from 'utils/request';

export const teamPlayersRepository = {
    get: teamId => {
        return request(`api/teams/${teamId}/players`).then(response => {
            return response.sort((a, b) => a.jerseyNumber > b.jerseyNumber ? 1 : -1);
        });
    }
};