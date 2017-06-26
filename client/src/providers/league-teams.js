import Team from 'models/team';
import {leagueTeamsRepository} from 'data/league-teams-repository';

export const leagueTeams = {
    get(leagueTitle) {
        return leagueTeamsRepository.get(leagueTitle).then(data => data.map(item => new Team(item)));
    }
};