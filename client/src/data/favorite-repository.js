import {storage} from 'utils/local-storage-access';

const favoritesStorageName = 'favorites';

export const favoriteData = {
    add(name) {
        return storage.get(favoritesStorageName).then(currentState => {
            if(!currentState.some(item => item === name)) {
                currentState.push(name);
            }

            storage.put(favoritesStorageName, currentState);
        });
    },
    remove(name) {
        return storage.get(favoritesStorageName).then(currentState => {
            if (currentState.some(item => item === name)) {
                currentState.splice(currentState.indexOf(name), 1);
            }

            storage.put(favoritesStorageName, currentState);
        });
    },
    get() {
        return storage.get(favoritesStorageName);
    }
};