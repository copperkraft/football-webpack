import ko from 'knockout';

import Fixture from 'models/fixture';
import {teamFixturesRepository} from 'data/team-fixtures-repository';

export const fixturesList = {
    get: teamId => {
        const fixturesList = ko.observableArray();
        teamFixturesRepository.get(teamId).then(data => {
            return fixturesList(data.map(item => new Fixture(item)));
        });
        return fixturesList;
    }
};