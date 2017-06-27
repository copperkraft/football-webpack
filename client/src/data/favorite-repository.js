import {storage} from 'utils/local-storage-access';

export const favoriteData = {
    add: name => {
        const currentState = storage.get('favorites');
        if(!currentState.some(item => item === name)) {
            currentState.push(name);
        }
        localStorage.favorites = JSON.stringify(currentState);
    },
    remove: name => {
        const currentState = localStorage.favorites ? JSON.parse(localStorage.favorites) : [];

        if(currentState.some(item => item === name)) {
            currentState.splice(currentState.indexOf(name), 1);
        }

        localStorage.favorites = JSON.stringify(currentState);
    },
    load: () => {
        return localStorage.favorites ? JSON.parse(localStorage.favorites) : [];
    }
};