import request from 'utils/request';
import composeUrl from 'utils/urlComposer';

export const teamPlayersRepository = {
    get(teamId, paging) {
        return request.get(composeUrl(`api/teams/${teamId}/players`, {paging}))
            .then(response => {
                return {
                    list: response.list.sort((a, b) => a.jerseyNumber > b.jerseyNumber ? 1 : -1),
                    pageCount: response.pageCount,
                    pageSize: response.pageSize,
                    page: response.pageNumber
                };
            });
    }
};