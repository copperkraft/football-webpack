export default function Player (dataObject) {
    this.id = dataObject.id;
    this.name = dataObject.name;
    this.jerseyNumber = dataObject.jerseyNumber;
    this.position = dataObject.position;
    this.dateOfBirth = new Date(dataObject.dateOfBirth);
    this.marketValue = dataObject.marketValue;
}
