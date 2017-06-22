module.exports = (url, isMinified) => {
    return {
        uri: `http://api.football-data.org/v1/${url}`,
        method: 'GET',
        headers: {
            'x-auth-token': 'ea247d3972de4c13b075ae1b61b88d72',
            'x-response-control': isMinified ? 'minified' : 'full'
        },
        json: true
    };
};
