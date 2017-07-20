import fixtureMapper from 'models/fixture/fixture-mapper';
import {teamFixturesRepository} from 'data/team-fixtures-repository';

export const fixturesList = {
    get(teamId, pagination, filters) {
        return teamFixturesRepository.get(teamId, pagination, filters).then(data => ({
            list: data.list.map(fixtureMapper),
            pageCount: data.pageCount
        }));
    }
};