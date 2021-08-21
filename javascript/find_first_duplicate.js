function findFirstDuplicate(arr) {
  for (let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      if (arr[i] === arr[i+1]){
        return arr[i]
      }
    }
  }
return -1
}

function findFirstDuplicateObj(arr) {
  let dictionary = {};

for(let i = 0; i < arr.length; i++) {
   if(dictionary[arr[i]] !== undefined)
   return arr[i];
else
 dictionary[arr[i]] = i;
}
return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("=>", findFirstDuplicate(([3, 4, 6, 6, 4, 6, 3])))
}

module.exports = findFirstDuplicate;



















// Please add your pseudocode to this file
// And a written explanation of your solution
