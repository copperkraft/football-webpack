import request from 'data/request';

export const tweetsRepository = {
    get: tag => { ///api/twitter/:tag
        return request(`api/twitter/${tag}`).then(response => {
            return JSON.parse(response);
        });
    }
};