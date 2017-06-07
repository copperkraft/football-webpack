const redirect = require('./redirect');

module.exports = function(request, response) {
    const options = {
        host: 'api.football-data.org',
        path: `/v1/competitions/${request.params.id}/leagueTable`,
        method: 'GET',
        headers: {'x-auth-token': 'ea247d3972de4c13b075ae1b61b88d72'}
    };
    redirect(options, response);
};