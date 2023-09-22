let arr = [1, 2, 4, 5, 6, 7, 8];

let deleted = arr.splice(1, 4, 23, 45);
// console.log(arr);
// console.log(deleted);

// splice method gives theree arguments index, second argument how many number should remove or add if we give 0 element could not remove
// pass by value and pass by reference

// let x = 10;
// function test(num) {
//   num += 1;
//   console.log("inside the function", num);
// }
// console.log("before calling", x);
// test(x);
// console.log("after calling", x);
// pass by value meand we are giving the memeroy or x just we passing the value of x so it should not change the orginal x
// all premitive data types are should the pass the values
// let arrs = [1];
// let data = arrs.push(34);
// console.log(data);
// console.log(arrs);
// function callbyReference(arr) {
//   let result = arr.push(3);
//   //console.log(result);
//   console.log(arr);
// }

// callbyReference(arrs);
// console.log(arrs);

// let datas = "rajesh reddy";

// console.log(datas.split(" ").join(""));

function missingNumber(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  let result = [];
  for (let i = min; i <= max; i++) {
    if (arr.indexOf(i) === -1) {
      console.log(i);
      result.push(i);
    }
  }

  return result;
}
console.log(missingNumber([1, 3, 4, 5, 6, 8]));
