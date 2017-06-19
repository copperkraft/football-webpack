import request from 'utils/request';

export const tweetsRepository = {
    get: tag => {
        return request(`api/twitter/${tag}`);
    }
};