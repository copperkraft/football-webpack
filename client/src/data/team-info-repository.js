import request from 'utils/request';

export const teamInfoRepository = {
    get(teamId) {
        return request.get(`api/teams/${teamId}/info`);
    }
};