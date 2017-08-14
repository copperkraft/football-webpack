export default {
    get(url) {
        return fetch('/' + url, {
            credentials: 'include'
        }).then(response => {
            switch (response.status) {
                case 200:
                    return response.json();
                case 401:
                    throw 'user unauthorised on server';
                default:
                    throw 'server error';
            }
        });
    },
    post(url, data) {
        return fetch('/' + url, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(data)
        }).then(response => {
            switch (response.status) {
                case 200:
                    return response.json();
                case 406:
                    throw 'wrong credentials';
                default:
                    throw 'server error';
            }
        }).catch(error => console.error(error));
    }
};