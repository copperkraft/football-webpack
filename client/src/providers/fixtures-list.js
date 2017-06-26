import Fixture from 'models/fixture';
import {teamFixturesRepository} from 'data/team-fixtures-repository';

export const fixturesList = {
    get(teamId) {
        return teamFixturesRepository.get(teamId).then(data => {
            return data.map(item => new Fixture(item));
        });
    }
};