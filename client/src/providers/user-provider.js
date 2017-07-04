export const user = {
    logIn(info) {
        return new Promise((resolve, reject) => {
            if(info.email === 'mail@example.com' && info.password === 'password') {
                resolve({
                    email: 'user@example.com',
                    name: 'someName',
                    favorites: [
                        {
                            name: 'team 1',
                            teamId: 10
                        },{
                            name: 'team 2',
                            teamId: 15
                        },{
                            name: 'team 3',
                            teamId: 20
                        },
                    ]
                });
            } else {
                reject(`${info.email} / mail@example.com, ${info.password} / password`);
            }
        });
    },
    register(info) {
        return new Promise((resolve, reject) => {
            if(info) {
                resolve({
                    email: 'user@example.com',
                    name: 'someName',
                    favorites: [
                        {
                            name: 'team 1',
                            teamId: 10
                        },{
                            name: 'team 2',
                            teamId: 15
                        },{
                            name: 'team 3',
                            teamId: 20
                        },
                    ]
                });
            } else {
                reject('incorrect');
            }
        });
    },
    logOff() {
        return new Promise((resolve) => {
            resolve();
        });
    },
    get() {
        return new Promise((resolve) => {
            resolve('user');
        });
    }
};