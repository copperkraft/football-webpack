import request from 'utils/request';

export const teamInfoRepository = {
    get(teamId) {
        return request(`api/teams/${teamId}/info`);
    }
};