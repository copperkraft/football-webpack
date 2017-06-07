import request from 'data/request';
import {indexes as leagueIds} from 'data/indexes';

export const leagueTeamsRepository = {
    get:  leagueTitle => {
        return request(`api/teams/${leagueIds[leagueTitle]}`).then(response => {
            return JSON.parse(response).teams.sort((a, b) => a.shortName > b.shortName ? 1 : -1);
        });
    }
};
