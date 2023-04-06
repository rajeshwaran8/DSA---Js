//selection sort 

var a = [100,34,61,22,5,1,2]
var index= 0;

for (let i = 0; i < a.length; i++) {

    index = i;

    for(let j = i+1; j< a.length;j++){

        if(a[index]>a[j]){
            
            index = j;
        }
    }

    var temp = a[index]
    a[index]= a[i]
    a[i]= temp;
}
console.log(a);