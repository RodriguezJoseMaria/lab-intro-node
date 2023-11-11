class SortedList {
  constructor(items, length) {
 this.items = [];
 this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  };

  get(pos) {
  if (!this.items[pos]) {
    throw new Error ("OutOfBounds");
  } else {
    return this.items[pos];
  }
}

  max() {
    if (this.length > 0) {
      return this.items[this.length - 1];
  } 
  else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.length > 0) {
      return this.items[0];
  } 
  else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
