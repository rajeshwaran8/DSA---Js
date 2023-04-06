class Stack{
    constructor(){
        this.stack = []
    }

    addElement(element){
            this.stack.push(element)
        return this
    }

    getAllStack(){
        for (let i = 0; i < this.stack.length; i++) {
            console.log(this.stack[i])
        }
    }

    clearAll(){
        return this.stack = [];
    }
    
    isEmpty(){
        return this.stack.length === 0;
    }


    getSize(){
      return   this.stack.length;
    }

    deleteLast(){
        return this.stack.pop()
    }


    getRecentlyAdded(){
        return this.stack[this.stack.length-1]
    }
}

let stackList = new Stack();
stackList.addElement(1);
stackList.addElement('k');
stackList.addElement('s');
stackList.addElement(12.2);
stackList.addElement(12);
stackList.getAllStack();   


console.log('Size of the Stack is '+stackList.getSize())

stackList.clearAll()


stackList.addElement(12);
stackList.addElement(123);

console.log(`Delete Last ${stackList.deleteLast()}`);

stackList.addElement(12);

console.log(`PEEK  ${stackList.getRecentlyAdded()}`)
console.log(stackList)

console.log(`find Is Empty `+stackList.isEmpty())

