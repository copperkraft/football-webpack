import Tweet from './tweet';

export default dataObject => {
    return new Tweet({
        text: dataObject.text,
        user: dataObject.user,
        time: new Date(dataObject.time)
    });
};