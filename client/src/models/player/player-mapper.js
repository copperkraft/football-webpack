import Player from './player';

export default dataObject => new Player({
    id: dataObject.id,
    name: dataObject.name,
    jerseyNumber: dataObject.jerseyNumber,
    position: dataObject.position,
    dateOfBirth: new Date(dataObject.dateOfBirth),
    marketValue: dataObject.marketValue,
});
