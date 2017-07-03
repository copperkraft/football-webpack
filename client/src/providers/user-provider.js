

export const user = {
    logIn(email, password) {
        return new Promise((resolve, reject) => {
            if(email === 'mail@example.com' && password === 'password') {
                resolve('1234');
            } else {
                reject('incorrect');
            }
        });
    },
    logOff() {
        return new Promise((resolve) => {
            resolve()
        });
    },
    get() {
        return new Promise((resolve) => {
            resolve('user')
        });
    }
};