import request from 'utils/request';
import composeUrl from 'utils/urlComposer';

export const teamPlayersRepository = {
    get(teamId, paging) {
        return request.get(composeUrl(`api/teams/${teamId}/players`, {paging}))
            .then(response => {
                return {
                    list: response.list,
                    pageCount: response.pageCount,
                    pageSize: response.pageSize,
                    page: response.pageNumber
                };
            });
    }
};