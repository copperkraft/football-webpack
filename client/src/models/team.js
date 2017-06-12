export default function Team (dataObject) {
    this.id = dataObject.id;
    this.name = dataObject.shortName || dataObject.name;
    this.fullName = dataObject.name;
    this.squadMarketValue = dataObject.squadMarketValue;
    this.imageUrl = dataObject.crestUrl;
}
