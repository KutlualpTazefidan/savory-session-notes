// initialize four variables:
// evenNum and oddNum, evenCount and oddCount

// We loop through the array, checking if the
// number is an even or an odd number (with the modulo % operator)

// After each iteration we check if we found the outlier.
// if we have more than one even number and only one odd number
// we return the odd number.

function findOutlier(integers) {
  let evenNum = 0;
  let oddNum = 0;
  let evenCount = 0;
  let oddCount = 0;
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      evenNum = integers[i];
      evenCount++;
    } else {
      oddNum = integers[i];
      oddCount++;
    }
  }
  console.log(evenCount, oddCount);
  if (evenCount > 1 && oddCount === 1) {
    return oddNum;
  } else if (oddCount > 1 && evenCount === 1) {
    return evenNum;
  }
}

console.log(findOutlier([2, 4, 5, 6]));
