function isAnagram(word1, word2) {
  // Tulis kodingan dibawah ini
  const result = true;
  word1=word1.toLowerCase()
  word2=word2.toLowerCase()
  word1=word1.split(' ').join('').split('')
  word2=word2.split(' ').join('').split('')
  word1.sort(function(a,b){return a.localeCompare(b)})
  word2.sort(function(a,b){return a.localeCompare(b)})
  return word1.join('')==word2.join('')
}

// Test Case
console.log(isAnagram('karet', 'raket')); // True
console.log(isAnagram('Balok', 'Lobak')); // True
console.log(isAnagram('Tom Marvolo Riddle', 'I am Lord Voldemort')); // True
console.log(isAnagram('cicak', 'tengkorak')); // False
