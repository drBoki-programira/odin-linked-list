class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.next = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.next === null) this.next = newNode;
    else {
      let nextNode = this.next;
      while (nextNode.next !== null) nextNode = nextNode.next;
      nextNode.next = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.next === null) this.next = newNode;
    else {
      newNode.next = this.next;
      this.next = newNode;
    }
  }

  size() {
    let length = 0;

    if (this.next !== null) {
      let node = this.next;
      length++;
      while (node.next !== null) {
        node = node.next;
        length++;
      }
    }

    return length;
  }

  head() {
    if (this.next) return this.next.value;
    else return;
  }

  tail() {
    if (this.next === null) return;
    let node = this.next;
    while (node.next !== null) node = node.next;
    return node.value;
  }

  at(index) {
    if (this.next === null) return;
    if (index < 0 || index >= this.size()) return;
    let node = this.next;

    for (let i = 0; i <= index; i++) {
      if (i === index) return node.value;
      else node = node.next;
    }
  }

  pop() {
    if (this.next === null) return;
    let newHead = this.next.next;
    this.next = newHead;
    return this.next.value;
  }

  contains(value) {
    let doesContain = false;

    if (this.next !== null) {
      let node = this.next;
      while (node !== null) {
        if (node.value === value) doesContain = true;
        node = node.next;
      }
    }

    return doesContain;
  }

  findIndex(value) {
    let index = 0;

    if (this.next === null) index--;
    else {
      let node = this.next;

      while (node !== null) {
        if (node.value === value) return index;
        index++;
        node = node.next;
      }

      index -= this.size() + 1;
    }

    return index;
  }

  toString() {
    let string = "";

    if (this.next !== null) {
      let node = this.next;

      while (node !== null) {
        string += `( ${node.value} ) -> `;
        node = node.next;
      }
      string += `null`;
    }

    return string;
  }

  insertAt(index, ...values) {
    if (index < 0 || index > this.size())
      throw new RangeError(
        `Index out of range. Allowed from 0 to ${this.size()}`
      );

    if (index === 0) {
      for (let i = values.length - 1; i >= 0; i--) {
        this.prepend(values[i]);
      }
    } else {
      let node = this.next;

      for (let i = 1; i < index; i++) node = node.next;

      let tailNodes = node.next;
      for (let value of values) {
        let newNode = new Node(value);
        node.next = newNode;
        node = node.next;
      }

      node.next = tailNodes;
    }
  }

  removeAt(index) {
    if (index < 0 || index >= this.size())
      throw new RangeError(
        `List index out of range.`
      );

    if (index === 0) {
      this.next = this.next.next
    } else {
      let node = this.next
      for (let i = 1; i <= index; i++) {
        if (i === index) {
          node.next = node.next.next
          break
        }
        node = node.next
      }
    }
  }
}

export { LinkedList };
