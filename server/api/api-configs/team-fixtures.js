const paramsBuilder = require('./builders/football-api-params-builder');

module.exports = {
    params(params) {
        return paramsBuilder(`teams/${params.id}/fixtures`, true);
    },
    mapper(data) {
        return data.fixtures;
    },
    filter(data, filters) {
        //.then(data => config.filter ? config.filter(request.query.filters) : data)
        console.log(filters);
        if (!filters) {
            return {
                list: data
            };
        }

        data.filter(item => {
            return !(filters.minDate && new Date(item.date) < new Date(filters.minDate)) &&
                !(filters.maxDate && new Date(item.date) > new Date(filters.maxDate));
        });

        return {
            list: data.filter(item => {
                return !(filters.minDate && new Date(item.date) < new Date(filters.minDate)) &&
                    !(filters.maxDate && new Date(item.date) > new Date(filters.maxDate));
            })
        };
    },
    paging: true
};