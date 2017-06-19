import request from 'data/request';

export const fixtureRepository = {
    get: id => {
        return request(`api/fixture/${id}`);
    }
};