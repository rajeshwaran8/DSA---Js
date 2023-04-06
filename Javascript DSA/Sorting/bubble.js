//bubble sort 
let bubbleSort = function(ar){

for (var i = 0; i < ar.length; i++) {

    for (var j = 0; j < ar.length; j++) {

        if(ar[j]>ar[j+1]){

           var temp = ar[j];
           ar[j] = ar[j+1];
           ar[j+1]= temp;
        }
    }
}
return ar;

}

var ar = [20,2,14,5,3,1,0]
console.log(`Bubble sort ${bubbleSort(ar)}`);










