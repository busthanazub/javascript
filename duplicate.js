array=[10,6,7,8,10,5,7,3,5]
// function linearSearch(array, toFind){
//     for(let i = 0; i < array.length; i++){
//       if(array[i] === toFind) 
//       return toFind;
//     }
//     return notfound;
//   }
//   console.log(linearSearch([10,6,7,8,10,5,7,3,5],[10,6,7,8,10,5,7,3,5]));



let check_dupli= (a) => { 
	let dupli= [] 
	for (num in a) { 
		for (num2 in a) { 
			if (num === num2) { 
				continue; 
			} 
			else { 
				if (a[num] === a[num2]) { 
					dupli.push(a[num]); 
				} 
			} 
		} 
	} 
	return [ (dupli)]; 
} 
let arr = [10,6,7,8,10,5,7,3,5]; 
console.log(check_dupli(arr));
