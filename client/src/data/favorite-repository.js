import {storage} from 'utils/local-storage-access';

export const favoriteData = {
    add: name => {
        storage.get('favorites').then(currentState => {
            if(!currentState.some(item => item === name)) {
                currentState.push(name);
            }

            storage.put('favorites', currentState);
        });
    },
    remove: name => {
        storage.get('favorites').then(currentState => {
            if (currentState.some(item => item === name)) {
                currentState.splice(currentState.indexOf(name), 1);
            }

            storage.put('favorites', currentState);
        });
    },
    load: () => {
        return storage.get('favorites');
    }
};