module.exports = {
    get(session) {
        return new Promise((resolve) => resolve({
            email: `user${session.user.id}@example.com`,
            name: 'someName',
            favorites: [
                {
                    name: `team of ${session.user.id}`,
                    teamId: session.user.id + 10
                },{
                    name: `team as ${session.user.id}`,
                    teamId: session.user.id + 15
                },{
                    name: `team in ${session.user.id}`,
                    teamId: session.user.id + 20
                },
            ]
        }));
    },
    authorise(session, eMail, password) {
        return new Promise((resolve, reject) => {
            if (eMail === password) {
                resolve();
            } else {
                reject();
            }
        });
    },
    register(session, user) {
        return new Promise((resolve, reject) => {
            if (user.eMail !== user.password) {
                resolve();
            } else {
                reject();
            }
        });
    },
    isExist(session, eMail) {
        return new Promise(resolve => resolve(eMail));
    }
};