import 'components/league-teams/league-teams';
import 'components/league-table/league-table';
import 'components/team-page/team-page';

export default [
    {
        path: '/league',
        component: 'league-table'
    },
    {
        path: '/teams',
        component: 'league-teams'
    },
    {
        path: '/teams/:id',
        component: 'team-page'
    }
];