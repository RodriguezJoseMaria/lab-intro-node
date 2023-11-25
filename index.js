class SortedList {
  constructor() {
    this.item = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (!this.items[pos]) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if(this.length === 0) {
      throw new Error ("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if(this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    if(this.length === 0) {
      return 0;
    } else {
      return this.items.reduece ((a, b) => a + b);
    }
  }

  avg() {
    if(this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
}

const sorted = new SortedList;
console.long(sorted.items);

module.exports = SortedList;
