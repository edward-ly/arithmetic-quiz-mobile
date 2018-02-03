export default math = {
  generateRandomInteger (range, start) {
    // Returns a random integer from start to (start + range - 1).
    return Math.floor(Math.random() * range) + start;
  },

  generateRandomOperation () {
    // Returns one of the operations from the list.
    const operations = ["+", "-", "*", "/"];
    let i = this.generateRandomInteger(operations.length, 0);
    return operations[i];
  },
}
