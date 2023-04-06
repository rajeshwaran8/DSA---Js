var a = [974,5,6,8,7,9];

var key = prompt('Enter the key')

for (let i = 0; i < a.length; i++) {
    if(key == a[i]){
        console.log(`the given key is present ${a[i]}`)
        break;
    }else{
        console.log(`the given key is Not present with ${key}`)
        break;
    }
}