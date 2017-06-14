export default function Tweet (dataObject) {
    this.text = dataObject.text;
    this.user = dataObject.user;
    this.time =  new Date(dataObject.time);
}