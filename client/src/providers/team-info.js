import Team from 'models/team';
import {teamInfoRepository} from 'data/team-info-repository';

export const teamInfo = {
    get(teamId) {
        return teamInfoRepository.get(teamId).then(data => new Team(data));
    }
};