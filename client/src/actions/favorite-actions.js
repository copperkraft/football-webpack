import {favorites} from 'providers/favorites-provider';

export const REQUST_FAVORITES = 'REQUST_FAVORITES';
function requestFavorites() {
    return {
        type: REQUST_FAVORITES
    };
}

export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';
function receiveFavorites(favorites) {
    return {
        type: RECEIVE_FAVORITES,
        payload: favorites
    };
}

export function fetchFavorites() {
    return function(dispatch) {
        dispatch(requestFavorites());
        return favorites.get().then(favorites => {
            dispatch(receiveFavorites(favorites));
        });
    };
}

export function addFavorite() {
    return function(dispatch) {
        dispatch(requestFavorites());
        return favorites.get().then(favorites => {
            dispatch(receiveFavorites(favorites));
        });
    };
}

