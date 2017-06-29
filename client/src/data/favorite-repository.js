import {storage} from 'utils/local-storage-access';

const favoritesStorageName = 'favorites';

export const favoriteData = {
    add(team) {
        return storage.get(favoritesStorageName).then(currentState => {
            if(!currentState.some(item => item.name === team.name)) {
                currentState.push(team);
            }

            storage.put(favoritesStorageName, currentState);
        });
    },
    remove(team) {
        return storage.get(favoritesStorageName).then(currentState => {
            if (currentState.some(item => item.name === team.name)) {
                currentState.splice(currentState.findIndex(item => item.name === team.name), 1);
            }

            storage.put(favoritesStorageName, currentState);
        });
    },
    get() {
        return storage.get(favoritesStorageName);
    }
};