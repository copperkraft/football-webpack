import fixtureMapper from 'models/fixture/fixture-mapper';
import {teamFixturesRepository} from 'data/team-fixtures-repository';

export const fixturesList = {
    get(teamId) {
        return teamFixturesRepository.get(teamId).then(data => ({
            list: data.list.map(fixtureMapper),
            pageCount: data.pageCount
        }));
    }
};