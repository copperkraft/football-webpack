import request from 'data/request';

export const tweetsRepository = {
    get: tag => {
        return request(`api/twitter/${tag}`);
    }
};