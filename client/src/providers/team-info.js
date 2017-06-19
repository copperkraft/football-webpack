import ko from 'knockout';

import Team from 'models/team';
import {teamInfoRepository} from 'data/team-info-repository';

export const teamInfo = {
    get: teamId => {
        const teamInfo = ko.observable();
        teamInfoRepository.get(teamId).then(data => {
            teamInfo(new Team(data));
        });
        return teamInfo;
    }
};