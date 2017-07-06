import Competitor from './favorite';

export default dataObject => new Competitor({
    id: dataObject.teamId,
    name : dataObject.teamName
});


