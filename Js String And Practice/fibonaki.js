// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
/*
    fibo[3] = fibp[2]+fibo[1]
    fibo[4] = fibp[3]+fibo[2]
    fibo[5] = fibp[4]+fibo[3]
    fibo[6] = fibp[5]+fibo[4]
    fibo[7] = fibp[6]+fibo[5]
    fibo[30] = fibp[29]+fibo[28]
    fibo[n] = fibo[n-1]+[n-2]
    fibo[i] = fibo[i-1]+[i-2]

*/

const fibo = [0, 1];

for (let i = 2; i <= 16546465; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);

// for (let i = 2; i <= 10; i++) {
//   fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);
