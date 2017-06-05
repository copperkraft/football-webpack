/**
 * Created by uladzimir.yakushkin on 05-Jun-17.
 */

function request(url) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('get', url);
        xhr.onload = resolve;
        xhr.onerror = reject;
        xhr.send();
    });
}

request('http://localhost:3000/table/438')
    .then(e => {
        console.log(e.target.response);
    },e => {
        console.log(e + 'error occur!');
    });

loadLeague = leagueTitle => {
    return request('http://localhost:3000/table/438').then(response => response.sort((left, right) => left.name > right.name))
};

