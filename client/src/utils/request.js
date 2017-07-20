export default {
    get(url) {
        return fetch(url, {
            credentials: 'include'
        }).then(response => {
            switch (response.status) {
                case 401:
                    throw 'not authorized';
                case 403:
                    throw 'forbidden';
                case 200:
                    return response.json();
                default:
            }
        }).catch(error => {
            console.log(error);
            throw error;
        });
    },
    post(url, data) {
        return fetch(url, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(data)
        }).then(response => {
            switch (response.status) {
                case 401:
                    throw 'not authorized';
                case 403:
                    throw 'forbidden';
                case 200:
                    return response.json();
                default:
            }
        }).catch(error => {
            console.log(error);
            throw error;
        });
    }
};