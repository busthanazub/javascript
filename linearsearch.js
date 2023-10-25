function linearSearch(array, toFind){
    for(let i = 0; i < array.length; i++){
      if(array[i] === toFind) 
      return toFind;
    }
    return -1;
  }
  console.log(linearSearch([2, 12, 15, 11, 7, 19, 45],7));
