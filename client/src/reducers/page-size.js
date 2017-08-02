import {SELECT_PAGE_SIZE} from '../actions/page-size-actions';
import {defaultPageSize} from 'constants/pagination';

export function pageSize(state = defaultPageSize, action) {
    switch (action.type) {
        case SELECT_PAGE_SIZE:
            return action.payload;
        default:
            return state;
    }
}