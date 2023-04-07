let num = prompt(`Enter the values`);
let s = num.toString()
let temp = s;
let c ="";
for (let i = s.length-1 ; i>=0 ; i--) {
     c += s.charAt(i);
}
if(c == temp){
    console.log(`palidrome`)
}else{
    console.log('not palidrome')
}