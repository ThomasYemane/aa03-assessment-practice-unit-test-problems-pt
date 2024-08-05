/***********************************************************************
You are given a recursive function, `printOuterNumsFirst()`, that takes an array
of numbers, and prints each number. If the length of the array is odd, then take
the number from the end of the array and print it. If the length of the array is
even, then take the number from the beginning of the array and print it.

The code is almost working but unfortunately, there are a few bugs. Use
the debugging skills you've been practicing and the VSCode debugger to
identify and solve the bugs.

Examples:

printOuterNumsFirst([1, 2, 3, 4, 5, 6, 7, 8]);
// 1
// 8
// 2
// 7
// 3
// 6
// 4
// 5

printOuterNumsFirst([21, 4, 6, 93, 78]);
// 78
// 21
// 93
// 4
// 6

***********************************************************************/

function printOuterNumsFirst(nums) {
  if (nums.length === 1) {
    console.log(nums[0]);
    return;
  }

  let num;
  if (nums.length % 2 === 0) {
    num = nums.shift(); 
  } else {
    num = nums.pop(); 
  }

  
  console.log(num);

  
  printOuterNumsFirst(nums);
}

// Examples:
printOuterNumsFirst([1, 2, 3, 4, 5, 6, 7, 8]); 

printOuterNumsFirst([21, 4, 6, 93, 78]); 


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = printOuterNumsFirst;
} catch {
  module.exports = null;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = printOuterNumsFirst;
} catch {
  module.exports = null;
}
