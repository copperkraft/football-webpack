import 'components/league-teams/league-teams';
import 'components/league-table/league-table';
import 'components/team-page/team-page';

import routeNames from 'constants/routes';

export default [
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