import request from 'data/request';

export const teamPlayersRepository = {
    get: teamId => {
        return request(`api/teams/${teamId}/players`);
    }
};