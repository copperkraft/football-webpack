import {routes} from './constants/routes';

import LeagueTable from './containers/league-table';
import LeagueTeams from './containers/league-teams';

export const routedComponents = [
    {
        path: `/${routes.leagueTablePage}`,
        component: LeagueTable
    }, {
        path: `/${routes.leagueTeamsPage}`,
        component: LeagueTeams
    }
];