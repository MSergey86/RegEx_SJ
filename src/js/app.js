export default class Validator {
  validateUsername(name) {
    this.name = name;
    const re = /^([a-zA-Z])[-_a-zA-Z0-9]+[a-zA-Z]$/;
    const reNum = /\d{4}/;
    return ((name.match(re) !== null) && (name.search(reNum) === -1));
  }
}
