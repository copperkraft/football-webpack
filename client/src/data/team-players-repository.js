import request from 'utils/request';

export const teamPlayersRepository = {
    get(teamId, pagination) {
        return request.get(`api/teams/${teamId}/players?paging[size]=${pagination.size}&paging[number]=${pagination.number}`)
            .then(response => {
                return response.sort((a, b) => a.jerseyNumber > b.jerseyNumber ? 1 : -1);
            });
    }
};