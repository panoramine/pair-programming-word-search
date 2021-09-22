const transpose = function(matrix) {
    let answerArray = [];
  
    for (let i = 0; i < matrix[0].length; i++) {
      let tmpArray = [];
  
      for (let j = 0; j < matrix.length; j++) {
        tmpArray.push(matrix[j][i]);
      }
  
      answerArray.push(tmpArray);
    }
  
    return answerArray;
  };


const findWord = (letters, word) => {
    const newWords = letters.map(ls => ls.join(''));
    for (const letters of newWords) {
        if (letters.includes(word)) return true;
    }
};


const wordSearch = (letters, word) => {
    if (findWord(letters, word)) {
        return true;
    } else if (findWord(transpose(letters), word)) {
        return true;
    }
    return false;
};
module.exports = wordSearch

