import {fixtureRepository} from 'data/fixture-repository';
import fixtureMapper from 'models/fixture/fixture-mapper';

export const fixtureInfo = {
    get(id) {
        return fixtureRepository.get(id).then(data => ({
            fixture: fixtureMapper(data),
            odds: data.odds,
            stat: data.stat,
            head2head: data.head2head.map(fixtureMapper)
        }));
    }
};