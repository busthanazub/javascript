// let n = 4;
// let str = "";

// for (let i=1;i<=n;i++) {
 
//   for (let j=1;j<=n-i;j++) {
//     str=str+ " ";
//   }
  
//   for (let k=1;k<=2*i-1;k++) {
//     str=str+k;
//   }
//   str=str+"\";
// }

// console.log(str);

let n = 3;
let str = "";
d=1;

for (let i=1;i<=n;i++) {
 
  for (let j=1;j<=n-i;j++) {
    str=str+ " ";
  }
  
  for (let k=1;k<=2*i-1;k++) {
    str=str+d;
    d++
  }
  str=str+"\n";
}

console.log(str);

