function findDuplicates(arr) {
    const dup = {};
    const duplicates = [];
  
    for (const num of arr) {
      if (dup[num]) {
        duplicates.push(num);
      } else {
        dup[num] = true;
      }
    }
  
    return duplicates;
  }
  
  const array = [1, ,1,2, 3, 4, 4, 5, 6, 6, 7];
  const duplicates = findDuplicates(array);
  console.log(duplicates); 
  