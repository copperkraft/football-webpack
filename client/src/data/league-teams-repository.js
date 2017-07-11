import request from 'utils/request';
import {indexes as leagueIds} from 'constants/indexes';

export const leagueTeamsRepository = {
    get(leagueTitle) {
        return request.get(`api/teams/${leagueIds[leagueTitle]}`);
    }
};
