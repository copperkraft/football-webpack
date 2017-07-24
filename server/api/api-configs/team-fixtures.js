const paramsBuilder = require('./builders/football-api-params-builder');

module.exports = {
    params(params) {
        return paramsBuilder(`teams/${params.id}/fixtures`, true);
    },
    mapper(data) {
        return data.fixtures;
    },
    filter(data, filters) {
        if (!filters) {
            return {
                list: data
            };
        }

        let minDate = new Date();
        let maxDate = new Date();

        data.forEach(fixture => {
            const currentDate = new Date(fixture.date);
            minDate = minDate > currentDate ? currentDate : minDate;
            maxDate = maxDate < currentDate ? currentDate : maxDate;
        });

        return {
            list: data.filter(item => {
                if (filters.minDate) {
                    if (new Date(item.date) < new Date(filters.minDate)) {
                        return false;
                    }
                }
                if (filters.maxDate) {
                    if (new Date(item.date) > new Date(filters.maxDate)) {
                        return false;
                    }
                }
                return true;
            }),
            minDate,
            maxDate
        };
    },
    paging: true
};