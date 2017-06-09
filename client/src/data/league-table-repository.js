import request from 'data/request';
import {indexes as leagueIds} from 'data/indexes';

export const leagueTableRepository = {
    get: leagueTitle => {
        return request(`api/table/${leagueIds[leagueTitle]}`).then(response => {
            return JSON.parse(response);
        });
    }
};