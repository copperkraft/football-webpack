import Tweet from './tweet';

export default dataObject => new Tweet({
    text: dataObject.text,
    user: dataObject.user,
    time: new Date(dataObject.time)
});
