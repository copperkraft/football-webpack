/**
 * Created by uladzimir.yakushkin on 06-Jun-17.
 */

module.exports = function Team (dataObject) {
    this.id = dataObject.id;
    this.name = dataObject.shortName;
    this.fullName = dataObject.name;
    this.squadMarketValue = dataObject.squadMarketValue;
    this.imageUrl = dataObject.crestUrl;
};
