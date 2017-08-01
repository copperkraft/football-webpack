import request from 'utils/request';

export const fixtureRepository = {
    get(id) {
        return request.get(`api/fixture/${id}`);
    }
};