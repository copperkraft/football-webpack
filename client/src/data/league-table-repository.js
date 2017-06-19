import request from 'data/request';
import {indexes as leagueIds} from 'constants/indexes';

export const leagueTableRepository = {
    get: leagueTitle => {
        return request(`api/table/${leagueIds[leagueTitle]}`);
    }
};