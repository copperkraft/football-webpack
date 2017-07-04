module.exports = {
    get(id) {
        return new Promise((resolve) => resolve({
            email: `user${id}@example.com`,
            name: 'someName',
            favorites: [
                {
                    name: `team of ${id}`,
                    teamId: id + 10
                },{
                    name: `team as ${id}`,
                    teamId: id + 15
                },{
                    name: `team in ${id}`,
                    teamId: id + 20
                },
            ]
        }));
    },
    authorise(eMail, password) {
        return new Promise((resolve, reject) => {
            if (eMail === password) {
                resolve();
            } else {
                reject();
            }
        });
    },
    register(eMail, password, info) {
        return new Promise((resolve, reject) => {
            if (eMail !== password) {
                console.log(info);
                resolve();
            } else {
                reject();
            }
        });
    },
    isExist(eMail) {
        return new Promise(resolve => resolve());
    }
};