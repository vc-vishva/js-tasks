const str = ['apple', 'banana', 'orange', 'apple', 'graphs', 'banana'];

function sortArrayString(strs){

   for(let i=0; i < strs.length; i++){
    for(let j= i+1; j <strs.length; j++){
		if(strs[i].length < strs[j].length){
			 let temp = strs[i]
                        strs[i]= strs[j]
                        strs[j]= temp
		}
		}
    
	}
    return strs;
}
console.log(sortArrayString(str));