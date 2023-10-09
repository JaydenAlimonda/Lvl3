function solution(arr){

    const nonMinusOnes = arr.filter(val => val !== -1);
  const sortedNonMinusOnes = nonMinusOnes.sort((a, b) => a - b);
  console.log(sortedNonMinusOnes)
  let nonMinusOneIndex = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = sortedNonMinusOnes[nonMinusOneIndex];
      nonMinusOneIndex++;
    }
  }


  return arr;
}

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
console.log(solution([5, 3, 1]))
console.log(solution([-1, -1, -1, -1]))
console.log(solution([100, -1, 50, -1, 75]))