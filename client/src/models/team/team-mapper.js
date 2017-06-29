import Team from './team';

export default dataObject => dataObject ? new Team({
    id: dataObject.id,
    name: dataObject.shortName || dataObject.name,
    fullName: dataObject.name || '',
    squadMarketValue: dataObject.squadMarketValue,
    imageUrl: dataObject.crestUrl
}) : null;

