const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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

class Node {
  constructor(element) {
    this.value = element;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  getUnderlyingList() {
    return this.head;
  }

  enqueue(element) {
    if (!this.head) {
      this.head = new Node(element);
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(element);
    }
    this.length++;
  }

  dequeue() {
    let currentNode = this.head;
    this.head = currentNode.next;
    this.length--;
    return currentNode.value;
  }
}

module.exports = {
  Queue,
};
