import request from 'utils/request';

export const fixtureRepository = {
    get(id) {
        return request(`api/fixture/${id}`);
    }
};