export const storage = {
    put(name, data) {
        localStorage.setItem(name, JSON.stringify(data));
    },
    delete(name) {
        localStorage.removeItem(name);
    },
    get(name) {
        return JSON.parse(localStorage.getItem(name) || '[]');
    }
};
