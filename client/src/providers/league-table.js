import Competitor from 'models/competitor';
import {leagueTableRepository} from 'data/league-table-repository';

export const leagueTable = {
    get(leagueTitle) {
        return leagueTableRepository.get(leagueTitle).then(data => data.map(item => new Competitor(item)));
    }
};