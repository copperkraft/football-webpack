import {teamPlayers} from 'providers/team-players-provider';
import {fixturesList} from 'providers/fixtures-list-provider';

export const REQUEST_TEAM_FIXTURES = 'REQUEST_TEAM_FIXTURES';
export function requestTeamFixtures(page, size) {
    return {
        type: REQUEST_TEAM_FIXTURES,
        payload: {
            page,
            size
        }
    };
}

export const RECEIVE_TEAM_FIXTURES = 'RECEIVE_TEAM_FIXTURES';
export function receiveTeamFixtures(fixtures, pageCount, page, size, minDate, maxDate) {
    return {
        type: RECEIVE_TEAM_FIXTURES,
        payload: {
            fixtures,
            pageCount,
            page,
            size,
            minDate,
            maxDate
        }
    };
}

export const CHANGE_FIXTURES_PAGINATION = 'CHANGE_FIXTURES_PAGINATION';
export function changeFixturesPagination(page, size) {
    return {
        type: CHANGE_FIXTURES_PAGINATION,
        payload: {
            page,
            size
        }
    };
}

export const CHANGE_FIXTURES_FILTERS = 'CHANGE_FIXTURES_FILTERS';
export function changeFixturesFilters(startDate, endDate) {
    return {
        type: CHANGE_FIXTURES_FILTERS,
        payload: {
            startDate,
            endDate
        }
    };
}

export function fetchTeamFixtures(teamId, page, size, minDate, maxDate) {
    return function(dispatch) {
        dispatch(requestTeamFixtures(page, size));
        return fixturesList.get(teamId, {number: page, size}, {minDate, maxDate})
            .then(data =>
                dispatch(receiveTeamFixtures(
                    data.list,
                    data.pageCount,
                    page,
                    size,
                    data.minDate,
                    data.maxDate
                )));
    };
}
