// Input any array of numbers
// Output the average
// [] => 0
// [,,0] => 0
// [1, 2, 3] => 2
// [-2, 0, 2] => 0

// const average = (arr = []) => {
//   // recorrer el arreglo y dividirlo por el número de elementos
//   const length = arr.length
//   if (length === 0) return 0
//   let sum = 0

//   for (let i = 0; i < length; i++) {
//     sum += arr[i]
//   }

//   return sum / length
// }

const average = (arr = []) => arr.length === 0 ? 0 : arr.reduce((acc, el) => acc + el, 0) / arr.length

export default average
