
//binary using recurrion

let recursiveMethod = function (arr, key, start, end) {
      
    if (start > end) 
      return false;
  
    let mid=Math.floor((start + end)/2);
  
    if (arr[mid] === key) 
       return true;   
    
    if(arr[mid] > key)
        return recursiveMethod(arr, key, start, mid-1);
    else
        return recursiveMethod(arr, key, mid+1, end);
}
  
let arr = [1, 3, 5, 7, 8, 9];
let key = parseInt(prompt(`Enter Element`));
  
if (recursiveMethod(arr, key, 0, arr.length-1))
 console.log("Element found!")
else 
 console.log("Element Not found!")

  