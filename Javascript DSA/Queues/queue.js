	class Queue {
		constructor() {
			this.items = [];
            this.backIndex = 0;
            this.frontIndex = 0;
        
        }

        enqueue(element){

            this.items[this.backIndex] = element;
             this.backIndex++;
             return element;
        }
        dequeue(){
          let item =  this.items[this.frontIndex];
          delete  this.items[this.frontIndex];
          this.frontIndex++;
          return item;
        }

        FirstElement(){

            return this.items[this.frontIndex]
        }
        isEmpty(){
            return this.items == 0
        }
        clear(){
            return this.items = []
        }
    }
    let qu = new Queue();
    let arr =  [8,2,3,5,677,7,8]

    for (let index = 0; index < arr.length; index++) {
    
        qu.enqueue(arr[index])
    }
     qu.dequeue()
     
     qu.enqueue(93)

     console.log(`the first element is ${qu.FirstElement()}`)

    console.log(qu)
    
    qu.clear()
    console.log(qu.isEmpty())


    