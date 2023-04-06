let a = [1, 2, 3, 4, 5];
let n = parseInt(prompt("Enter Number"));

// left rotate the array n times
for (let i = 1; i <= n; i++) {
  let first = a.shift(); 
  a.push(first); 
}

console.log(a);
