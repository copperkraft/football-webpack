import request from 'data/request';
import {indexes as leagueIds} from 'data/indexes';

export const teamFixturesRepository = {
    get: teamId => {
        return request(`api/teams/${teamId}/players`).then(response => {
            return JSON.parse(response);
        });
    }
};