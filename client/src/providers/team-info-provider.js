import teamMapper from 'models/team/team-mapper';
import {teamInfoRepository} from 'data/team-info-repository';

export const teamInfo = {
    get(teamId) {
        return teamInfoRepository.get(teamId).then(teamMapper);
    }
};