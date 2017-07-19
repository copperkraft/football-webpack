import request from 'utils/request';

export const teamFixturesRepository = {
    get(teamId, pagination) {
        return request.get(`api/teams/${teamId}/fixtures` +
            pagination ?
            `?paging[size]=${pagination.size}&paging[number]=${pagination.number}` :
            ''
        );
    }
};