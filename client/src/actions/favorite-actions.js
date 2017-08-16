import {favorites} from 'providers/favorites-provider';

export const REQUEST_FAVORITES = 'REQUEST_FAVORITES';
function requestFavorites() {
    return {
        type: REQUEST_FAVORITES
    };
}

export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';
function receiveFavorites(favorites) {
    return {
        type: RECEIVE_FAVORITES,
        payload: favorites
    };
}

export const FAILED_RECEIVE_FAVORITES = 'FAILED_RECEIVE_FAVORITES';
function failedReceiveFavorites() {
    return {
        type: FAILED_RECEIVE_FAVORITES
    };
}

export function fetchFavorites() {
    return function(dispatch) {
        dispatch(requestFavorites());
        return favorites.get()
            .then(favorites => {
                dispatch(receiveFavorites(favorites));
            }).catch(() => {
                dispatch(failedReceiveFavorites());
            });
    };
}

export function addFavorite(team) {
    return function(dispatch) {
        dispatch(requestFavorites());
        return favorites.add(team)
            .then(favorites => {
                dispatch(receiveFavorites(favorites));
            })
            .catch(() => {
                dispatch(failedReceiveFavorites());
            });
    };
}

export function removeFavorite(team) {
    return function(dispatch) {
        dispatch(requestFavorites());
        return favorites.remove(team)
            .then(favorites => {
                dispatch(receiveFavorites(favorites));
            }).catch(() => {
                dispatch(failedReceiveFavorites());
            });
    };
}