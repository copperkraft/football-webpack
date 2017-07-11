import request from 'utils/request';

export const teamFixturesRepository = {
    get(teamId) {
        return request.get(`api/teams/${teamId}/fixtures`);
    }
};