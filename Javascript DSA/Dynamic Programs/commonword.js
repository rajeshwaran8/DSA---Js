let str1 = 'hello world';
let str2 = 'the world is beautiful';

let words1 = str1.split(' ');
let words2 = str2.split(' ');

let commonWords = [];

for (let i = 0; i < words1.length; i++) {
  if (words2.includes(words1[i])) {
    commonWords.push(words1[i]);
  }
}

console.log(commonWords);
