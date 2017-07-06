export default function request(url, method, data) {
    if (!method) {
        return fetch(url, {
            credentials: 'include'
        }).then(response => {
            return response.json();
        });
    } else {
        return fetch(url, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(data)
        }).then(response => {
            if (response.status === 202) {
                return;
            }
            return response.json();
        }).catch(error => console.log(error));
    }
}