export const storage = {
    put(name, data) {
        localStorage.setItem(name, JSON.stringify(data));
    },
    delete(name) {
        localStorage.removeItem(name);
    },
    get(name) {
        return new Promise((resolve, reject) => {
            resolve(JSON.parse(localStorage.getItem(name) || '[]'));
        });
    }
};
