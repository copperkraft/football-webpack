import request from 'data/request';

export const teamFixturesRepository = {
    get: teamId => {
        return request(`api/teams/${teamId}/fixtures`);
    }
};