import {combineReducers} from 'redux';
import page from './page';
import user from './user';
import leagueTable from './league-table';

export default combineReducers({
    page,
    user,
    leagueTable
});