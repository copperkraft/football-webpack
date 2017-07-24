export default {
    get(url) {
        return fetch(url, {
            credentials: 'include'
        }).then(response => {
            switch (response.status) {
                case 200:
                    return response.json();
                default:
            }
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
                case 200:
                    return response.json();
                default:
            }
        });
    }
};