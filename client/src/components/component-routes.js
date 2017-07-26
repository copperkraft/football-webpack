import 'components/league-teams/league-teams';
import 'components/league-table/league-table';
import 'components/team-page/team-page';
import 'components/profile-page/profile-page';
import 'components/profile-edit/profile-edit';

import {routes} from 'constants/routes';

export default [
    {
        path: `/${routes.leagueTablePage}`,
        component: 'league-table'
    },
    {
        path: `/${routes.leagueTeamsPage}`,
        component: 'league-teams'
    },
    {
        path: `/${routes.team}`,
        component: 'team-page'
    },
    {
        path: `/${routes.profilePage}`,
        component: 'profile-page'
    },
    {
        path: `/${routes.profilePage}/edit`,
        component: 'profile-edit'
    }
];