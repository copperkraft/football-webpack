import {fixtureInfo} from 'providers/fixture-info-provider';

export const REQUEST_FIXTURE_INFO = 'REQUEST_FIXTURE_INFO';
export function requestFixtureInfo(fixture) {
    return {
        type: REQUEST_FIXTURE_INFO,
        payload: fixture
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

export function fetchFixtureInfo(fixture) {
    return function(dispatch) {
        dispatch(requestFixtureInfo(fixture));
        return fixtureInfo.get(fixture.id)
            .then(data => dispatch(receiveFixtureInfo(
                data.fixture, 
                data.odds, 
                data.stat, 
                data.head2head
            )))
            .catch(err => {
                dispatch(receiveFixtureInfo(
                    fixture,
                    null,
                    null,
                    []
                ));
            });
    };
}
