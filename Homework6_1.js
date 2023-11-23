let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function myBlend(arr) {
  for (let index = arr.length - 1; index > 0; index--) {
    //index = length - 1; because index starts with 0, and length with 1
    const randInd = Math.floor(Math.random() * (index + 1));
    // the random Index will be between 0 and current index, since random is always less than 1
    [arr[index], arr[randInd]] = [arr[randInd], arr[index]];
    // I remember learning this method quite some time ago on some site about shuffling arrays.
  }
}

myBlend(arr);
console.log(arr);
