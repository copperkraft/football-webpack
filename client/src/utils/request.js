export default function request(url, method, data) {
    if (!method) {
        return fetch(url).then(response => response.json());
    } else {
        return fetch(url, {
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            return response.json();
        });
    }
}