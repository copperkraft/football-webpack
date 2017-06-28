import {storage} from 'utils/local-storage-access';

export const favoriteData = {
    add(name) {
        return storage.get('favorites').then(currentState => {
            if(!currentState.some(item => item === name)) {
                currentState.push(name);
            }

            storage.put('favorites', currentState);
        });
    },
    remove(name) {
        return storage.get('favorites').then(currentState => {
            if (currentState.some(item => item === name)) {
                currentState.splice(currentState.indexOf(name), 1);
            }

            storage.put('favorites', currentState);
        });
    },
    get() {
        return storage.get('favorites');
    }
};