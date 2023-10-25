let n= 4;
let str= "";

for (i=1;i<=n;i++) {
  
  for (j=1;j<i;j++) {
    str+= " ";
  }
  
  for (k=1;k<=2*(n-i+1)-1;k++) {
    str += k;
  }
  str += "\n";
}
console.log(str);