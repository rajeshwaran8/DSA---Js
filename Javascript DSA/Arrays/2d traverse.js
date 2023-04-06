var mul = [];
let multipleDynamic = function(ar){
    
    for (let i = 0; i < ar.length; i++) {

        for (let j = 0; j < ar[i].length; j++) {
           console.log(ar[j][i])
        }
        console.log('\n')
    }
}
var  ar= [[1,2,3],
          [4,5,6],
          [7,8,9]]
         
multipleDynamic(ar);
