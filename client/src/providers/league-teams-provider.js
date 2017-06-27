import teamMapper from 'models/team/team-mapper';
import {leagueTeamsRepository} from 'data/league-teams-repository';

export const leagueTeams = {
    get(leagueTitle) {
        return leagueTeamsRepository.get(leagueTitle).then(data => data.map(teamMapper));
    }
};