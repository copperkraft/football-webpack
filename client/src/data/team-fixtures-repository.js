import request from 'utils/request';

export const teamFixturesRepository = {
    get: teamId => {
        return request(`api/teams/${teamId}/fixtures`);
    }
};