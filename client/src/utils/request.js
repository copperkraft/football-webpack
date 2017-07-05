export default function request(url, method, data) {
    if (!method) {
        return fetch(url, {
            credentials: 'include'
        }).then(response => response.json());
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
            return response.json();
        });
    }
}