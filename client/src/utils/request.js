export default function request(url, method, data) {
    if (!method) {
        return fetch(url, {
            credentials: 'include'
        }).then(response => {
            if (response.status === 202) {
                return;
            }
            return response.json();
        }).catch(error => console.log(error));
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
            if (response.status === 202 || response.status === 403) {
                return;
            }
            return response.json();
        }).catch(error => console.log(error));
    }
}