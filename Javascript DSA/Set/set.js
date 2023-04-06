class Set{

    constructor(){
        this.set = [];
    }

    adding(element){
        

        if (this.set.includes(element)) {
            return;
            
        } else{
            let i = 0;
            while (i < this.set.length && this.set[i] < element) {
                i++;
            }
            this.set.splice(i, 0, element);
        }
    }

    deleteValue(value){
       let index = this.set.indexOf(value)
       if(index !== -1){
        return  this.set.splice(index,1)

       }
       return null;
    }

}

let setData = new Set();
setData.adding(12);
setData.adding(76);
setData.adding(287);
setData.adding(12);
setData.adding(6);
setData.adding(61);
setData.adding(6);
setData.adding(2)
setData.adding(12);


console.log(setData)

setData.deleteValue(61)

console.log(setData)
