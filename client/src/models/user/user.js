export default class User {
    constructor(params = {}) {
        this.id = params.id;
        this.email = params.email;
        this.birthDate = params.birthDate;
        this.name = params.name;
    }
}
