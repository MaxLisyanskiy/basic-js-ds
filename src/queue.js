const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Item {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  enqueue(value) {
    const item = new Item(value)

    if(this.head) {
      this.tail.next = item
      this.tail = item
    } else {
      this.head = item
      this.tail = item
    }

    this.length + 1
  }

  dequeue() {
    const currentItem = this.head.value
    this.head = this.head.next
    this.length - 1

    return currentItem
  }

  getUnderlyingList() {
    return this.head
  }
}

module.exports = {
  Queue
};
