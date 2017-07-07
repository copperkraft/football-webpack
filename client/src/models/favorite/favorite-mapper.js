import Competitor from './favorite';

export default dataObject => new Competitor({
    id: dataObject.id,
    name : dataObject.name
});


