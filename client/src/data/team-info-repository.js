import request from 'data/request';

export const teamInfoRepository = {
    get: teamId => {
        return request(`api/teams/${teamId}/info`);
    }
};