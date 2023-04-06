class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    append(value) {
      const node = new Node(value);
  
      if (this.head == null) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        this.tail = node;
      }
  
      this.length++;
    }

    prepend(value) {
      const node = new Node(value);
  
      if (this.head==null) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
  
      this.length++;
    }

    insert(index, value) {
      if (index >= this.length) {
        return this.append(value);
      }
  
      if (index === 0) {
        return this.prepend(value);
      }
  
      const node = new Node(value);
      const leader = this.traverseToIndex(index - 1);
      const follower = leader.next;
      leader.next = node;
      node.next = follower;
      this.length++;
    }

    traverseToIndex(index) {
      let currentNode = this.head;
      let counter = 0;
  
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
  
      return currentNode;
    }
  
    printList() {
      const array = [];
  
      let currentNode = this.head;
  
      while (currentNode) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }
  
      console.log(array);
    }
  }

  const linkedList = new LinkedList();
  
  linkedList.append(10) ;
  linkedList.append(5);
  linkedList.prepend(1);
  linkedList.prepend(0);
  linkedList.insert(2,7)
  linkedList.printList(); 
  