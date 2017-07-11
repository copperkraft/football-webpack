import request from 'utils/request';
import {indexes as leagueIds} from 'constants/indexes';

export const leagueTableRepository = {
    get(leagueTitle) {
        return request.get(`api/table/${leagueIds[leagueTitle]}`);
    }
};