// Stack class
class Stack {
  constructor() {
    this.items = [];
  }

  push(data) {
    console.log(this.items, 'before');
    // push element into the items
    this.items.push(data);
    console.log(this.items, '===after===');
  }

  pop() {
    // if (this.items.length === 0) {
    //   return [];
    // }
    return this.items.pop();
  }

  getContent() {
    return this.items;
  }
}

const stack = new Stack();
export default stack;
