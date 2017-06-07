export const favoriteData = {
    add: name => {
        let currentState = localStorage.favorites? JSON.parse(localStorage.favorites): [];
        if(!currentState.some(item => item === name)) {
            currentState.push(name);
        }
        localStorage.favorites = JSON.stringify(currentState);
    },
    remove: name => {
        let currentState = localStorage.favorites? JSON.parse(localStorage.favorites): [];

        if(currentState.some(item => item === name)) {
            currentState.splice(currentState.indexOf(name), 1);
        }

        localStorage.favorites = JSON.stringify(currentState);
    },
    load: () => {
        return localStorage.favorites? JSON.parse(localStorage.favorites): [];
    }
};