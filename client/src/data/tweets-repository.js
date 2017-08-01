import request from 'utils/request';

export const tweetsRepository = {
    get(tag) {
        return request.get(`api/twitter/${tag}`);
    }
};