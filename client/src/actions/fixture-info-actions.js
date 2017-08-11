import {fixtureInfo} from 'providers/fixture-info-provider';

export const REQUEST_FIXTURE_INFO = 'REQUEST_FIXTURE_INFO';
export function requestFixtureInfo(id) {
    return {
        type: REQUEST_FIXTURE_INFO,
        payload: id
    };
}

export const RECEIVE_FIXTURE_INFO = 'RECEIVE_FIXTURE_INFO';
export function receiveFixtureInfo(fixture, odds, stat, head2head) {
    return {
        type: RECEIVE_FIXTURE_INFO,
        payload: {
            fixture, 
            odds, 
            stat, 
            head2head
        }
    };
}

export function fetchFixtureInfo(fixtureId) {
    return function(dispatch) {
        dispatch(requestFixtureInfo());
        return fixtureInfo.get(fixtureId)
            .then(data => dispatch(receiveFixtureInfo(
                data.fixture, 
                data.odds, 
                data.stat, 
                data.head2head
            )));
    };
}
