import competitorMapper from 'models/competitor/competitor-mapper';
import {leagueTableRepository} from 'data/league-table-repository';

export const leagueTable = {
    get(leagueTitle) {
        return leagueTableRepository.get(leagueTitle).then(data => data.map(competitorMapper));
    }
};