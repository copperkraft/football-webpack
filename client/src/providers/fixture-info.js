import ko from 'knockout';

import {fixtureRepository} from 'data/fixture-repository';

export const fixtureInfo = {
    get: id => {
        const fixture = ko.observable();
        fixtureRepository.get(id).then(data => {
            fixture(data);
        });
        return fixture;
    }
};