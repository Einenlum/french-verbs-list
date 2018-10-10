const data = require('./verbs.json');
const verbs = data.verbs;

module.exports = {
  get firstGroup() {
    return verbs['first_group'];
  },
  get secondGroup() {
    return verbs['second_group'];
  },
  get thirdGroup() {
    return verbs['third_group'];
  },
  get all() {
    const arr = [].concat(
      verbs['first_group'],
      verbs['second_group'],
      verbs['third_group']
    );
    arr.sort();

    return arr;
  }
};
