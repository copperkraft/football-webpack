export const storage = {
    put(name, data) {
        return new Promise((resolve) => {
            localStorage.setItem(name, JSON.stringify(data));
            resolve(true);
        });
    },
    delete(name) {
        return new Promise((resolve) => {
            localStorage.removeItem(name);
            resolve(true);
        });
    },
    get(name) {
        return new Promise((resolve) => {
            resolve(JSON.parse(localStorage.getItem(name) || '[]'));
        });
    }
};
