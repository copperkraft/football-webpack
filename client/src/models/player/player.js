export default class Player {
    constructor(params = {}) {
        this.id = params.id;
        this.name = params.name;
        this.jerseyNumber = params.jerseyNumber;
        this.position = params.position;
        this.dateOfBirth = params.dateOfBirth;
        this.marketValue = params.marketValue;
    }
}
