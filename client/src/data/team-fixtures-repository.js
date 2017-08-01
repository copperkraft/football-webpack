import request from 'utils/request';
import composeUrl from 'utils/urlComposer';

export const teamFixturesRepository = {
    get(teamId, paging, filters) {
        return request.get(composeUrl(`api/teams/${teamId}/fixtures`, {paging, filters}));
    }
};