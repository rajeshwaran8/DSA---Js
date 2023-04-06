

let a = [1,2,3,4,5]
let n = parseInt(prompt(`Enter Number`))
let first ;
for (let i = 1; i <= n; i ++) {

    first = a[0];

    for (let j = 0; j < a.length-1; j++) {

        a[j]= a[j+1]
    }
    a[a.length-1]= first;
}
console.log(a)

