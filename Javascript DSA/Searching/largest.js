//find the Maximum element in array

var a = [2,3,68,90,10];
var Maximum = a[0];
for (let i = 0; i < a.length; i++) {
    
    if(Maximum<a[i]){
        Maximum = a[i];
    }
}
console.log(Maximum)