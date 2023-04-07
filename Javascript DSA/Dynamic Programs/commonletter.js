function findCommonLetters(word1, word2) {
    let commonLetters = [];
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();
  
    let l1 = word1.split('');
    let l2 = word2.split('');
  
    for (let i = 0; i < l1.length; i++) {

      let currentLetter = l1[i];

      if (l2.includes(currentLetter) && !commonLetters.includes(currentLetter)) {
        commonLetters.push(currentLetter);
      }
    }
  
    return commonLetters;
  }
  
  let word1 = 'apple';
  let word2 = 'banana';
  
  let commonLetters = findCommonLetters(word1, word2);
  
  console.log(`Common letters between "${word1}" and "${word2}": ${commonLetters.join(', ')}`);
  