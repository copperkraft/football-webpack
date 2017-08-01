import User from './user';

export default dataObject => dataObject ? new User({
    id: dataObject.id,
    email: dataObject.email,
    birthDate: dataObject.birthDate ? new Date(dataObject.birthDate) : null,
    name: dataObject.name
}) : null;

