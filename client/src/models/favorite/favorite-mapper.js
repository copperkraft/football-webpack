import Competitor from './favorite';

export default dataObject => dataObject ? new Competitor({
    id: dataObject.id,
    name : dataObject.name
}) : null;


