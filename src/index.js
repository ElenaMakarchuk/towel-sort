
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix == undefined || matrix.length == 0){
    return [];
  } else {
    return matrix.reduce((matrix, cur, index) => {
      if(index % 2 !== 0) {
        return matrix.concat(cur.reverse())                                 
      } else {
        return matrix.concat(cur)
      }}, []);
}
}   
