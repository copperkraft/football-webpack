export default class Team {
    constructor(params = {}) {
        this.id = params.id;
        this.name = params.name;
        this.fullName = params.fullName;
        this.squadMarketValue = params.squadMarketValue;
        this.imageUrl = params.imageUrl;
    }
}
