function prime(n){
    for (i = 2; i <n; i++) {
       if(n%i==0)
return false  
   }
   return n>1
}
console.log(prime(11));