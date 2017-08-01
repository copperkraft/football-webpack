import {routes} from './constants/routes';

import LeagueTable from 'containers/league-table';
import LeagueTeams from 'containers/league-teams';
import TeamPage from 'containers/team-page';

export const routedComponents = [
    {
        path: `/${routes.leagueTablePage}`,
        component: LeagueTable
    },
    {
        path: `/${routes.team}`,
        component: TeamPage
    },
    {
        path: `/${routes.leagueTeamsPage}`,
        component: LeagueTeams
    }
];

export const defaultRoute = `/${routes.leagueTablePage}`;
