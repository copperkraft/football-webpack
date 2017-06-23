import ko from 'knockout';

import {fixtureRepository} from 'data/fixture-repository';

export const fixtureInfo = {
    get: id => {
        return fixtureRepository.get(id);
    }
};