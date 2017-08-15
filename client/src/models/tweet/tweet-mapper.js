import Tweet from './tweet';

export default dataObject => dataObject ? new Tweet({
    text: dataObject.text,
    user: dataObject.user,
    time: new Date(dataObject.time),
    id: dataObject.id
}) : null;
