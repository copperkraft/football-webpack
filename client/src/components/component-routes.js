import 'components/league-teams/league-teams';
import 'components/league-table/league-table';
import 'components/team-page/team-page';

import routeNames from 'constants/routes';

const routes = [
    {
        path: `/${routeNames.leagueTablePage}`,
        component: 'league-table'
    },
    {
        path: `/${routeNames.leagueTeamsPage}`,
        component: 'league-teams'
    },
    {
        path: `/${routeNames.teamPage}/:id`,
        component: 'team-page'
    }
];

export default routes.map(route => {
    return {
        path: route.path.match(/\/:?\w+/g).map(item => {
            return item[1] === ':' ? {
                type: 'parameter',
                name: item.slice(2)
            } : {
                type: 'constant',
                name:  item.slice(1)
            };
        }),
        component: route.component
    };
});