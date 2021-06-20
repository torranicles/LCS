function lcs(str1, str2) {
    const dpTable = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));
    
    for (let column = 0; column <= str1.length; column++) {
      dpTable[0][column] = 0;
    }
  
    for (let row = 0; row<= str2.length; row++) {
      dpTable[row][0] = 0;
    }
  
    for (let rowIndex = 1; rowIndex <= str2.length; rowIndex++) {
      for (let columnIndex = 1; columnIndex <= str1.length; columnIndex++) {
        if (str1[columnIndex - 1] === str2[rowIndex - 1]) {
          dpTable[rowIndex][columnIndex] = dpTable[rowIndex - 1][columnIndex - 1] + 1;
        } else {
          dpTable[rowIndex][columnIndex] = Math.max(
            dpTable[rowIndex - 1][columnIndex],
            dpTable[rowIndex][columnIndex - 1],
          );
        }
      }
    }
  
    let columnIndex = str1.length;
    let rowIndex = str2.length;
    const longestSubsequence = [];
    
    if (!dpTable[str2.length][str1.length]) {
      return '';
    }
  
    while (columnIndex > 0 || rowIndex > 0) {
      if (str1[columnIndex - 1] === str2[rowIndex - 1]) {
        longestSubsequence.unshift(str1[columnIndex - 1]);
        columnIndex -= 1;
        rowIndex -= 1;
      } else if (dpTable[rowIndex][columnIndex] === dpTable[rowIndex][columnIndex - 1]) {
        columnIndex -= 1;
      } else {
        rowIndex -= 1;
      }
    }
  
    return longestSubsequence.join('');
}
