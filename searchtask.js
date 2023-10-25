function linearSearch(array){
    for(let i = 0; i < array.length; i++){
      if(array[i] === array[i]) 
      return i;
    }
    return -1;
  }
  console.log(linearSearch([2, 12, 15, 11, 7, 19, 45],7));