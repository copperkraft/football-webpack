import request from 'utils/request';

export const teamFixturesRepository = {
    get(teamId, pagination, filters) {
        return request.get(
            `api/teams/${teamId}/fixtures?paging[size]=${pagination.size}&paging[number]=${pagination.number}` +
                Object.keys(filters).map(filter => `&filters[${filter}]=${encodeURIComponent(filters[filter])}`).join('')
        );
    }
};