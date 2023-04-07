let num = parseInt(prompt(`Enter the number`))
let square = num*num;
let sum = 0;

if(isNeon(num,square,sum)){
    console.log(`Neon Number`)
}else{
    console.log(`Not Neon Number`)
}


function isNeon(num,square,sum) {
    
    while (square > 0) {
        sum= sum + square%10;
        square = Math.floor( square/10);
    }

    if (sum === num ) {
        return true;
    } 

}