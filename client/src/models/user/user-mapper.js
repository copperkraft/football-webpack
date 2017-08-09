import User from './user';

export default dataObject => {
    if (!dataObject) {
        throw 'empty data';
    }
    return dataObject ? new User({
        id: dataObject.id,
        email: dataObject.email,
        birthDate: dataObject.birthDate ? new Date(dataObject.birthDate) : null,
        name: dataObject.name
    }) : null;
};

