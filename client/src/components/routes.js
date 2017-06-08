const routes = [
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

export default routes;