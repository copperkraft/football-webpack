import ko from 'knockout';

import Team from 'models/team';
import {leagueTeamsRepository} from 'data/league-teams-repository';

export const leagueTeams = {
    get: leagueTitle => {
        const leagueTeams = ko.observableArray();
        leagueTeamsRepository.get(leagueTitle).then(data => leagueTeams(data.map(item => new Team(item))));
        return leagueTeams;
    }
};