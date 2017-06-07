/**
 * Created by uladzimir.yakushkin on 06-Jun-17.
 */

module.exports = url => {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('get', url);
        xhr.onload = () => resolve(xhr.response);
        xhr.onerror = () => reject(xhr.response);
        xhr.send();
    });
}