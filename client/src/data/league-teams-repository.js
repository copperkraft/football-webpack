import request from 'utils/request';
import {indexes as leagueIds} from 'constants/indexes';

export const leagueTeamsRepository = {
    get:  leagueTitle => {
        return request(`api/teams/${leagueIds[leagueTitle]}`);
    }
};
