import notie from 'notie';

export function showSuccessAlert(text) {
    notie.alert({
        type: 'success',
        text: text || 'success',
        time: 1
    });
}

export function showErrorAlert(text) {
    notie.alert({
        type: 'error',
        text: text || 'error',
        time: 3
    });
}