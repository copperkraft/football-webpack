import ko from 'knockout';

import Competitor from 'models/competitor';
import {leagueTableRepository} from 'data/league-table-repository';

export const leagueTable = {
    get: leagueTitle => {
        const leagueTable = ko.observableArray();
        leagueTableRepository.get(leagueTitle).then(data => leagueTable(data.map(item => new Competitor(item))));
        return leagueTable;
    }
};