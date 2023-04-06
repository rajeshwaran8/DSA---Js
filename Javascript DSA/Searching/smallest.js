//find the Minmum element in array

var a = [2,3,68,90,10];
var Minmum = a[0];
for (let i = 0; i < a.length; i++) {
    
    if(Minmum>a[i]){
        Minmum = a[i];
    }
}
console.log(Minmum)