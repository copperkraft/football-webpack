import 'components/league-teams/league-teams';
import 'components/league-table/league-table';
import 'components/team-page/team-page';
import 'components/profile-page/profile-page';
import 'components/profile-edit/profile-edit';

import routeNames from 'constants/routes';

export default [
    {
        path: `/${routeNames.leagueTablePage}`,
        component: 'league-table'
    }, {
        path: `/${routeNames.leagueTeamsPage}`,
        component: 'league-teams'
    }, {
        path: `/${routeNames.teamPage}/:id`,
        component: 'team-page'
    }, {
        path: `/${routeNames.profilePage}`,
        component: 'profile-page'
    }, {
        path: `/${routeNames.profilePage}/edit`,
        component: 'profile-edit'
    }
];