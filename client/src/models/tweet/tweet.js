export default class Tweet {
    constructor(params = {}) {
        this.text = params.text;
        this.user = params.user;
        this.time = params.time;
    }
}