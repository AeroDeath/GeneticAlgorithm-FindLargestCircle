function int_to_bin(int){
	bin_string = int.toString(2)
	bin_string = "0000000".substr(bin_string.length)+bin_string
	return bin_string
}

function bin_to_int(bin_string){
	return parseInt(bin_string,2)
}

function randInt(lower = 0, upper = 256){
	return Math.floor(Math.random()*(upper-lower)) + lower
}

function findMax(array, type = 'value'){

	max_val = -1
	max_index = -1
	for(i = 0; i<array.length; i = i+1)
		if(max_val<array[i]){
			max_val = array[i]
			max_index = i
		}

	if (type == 'value')
		return max_val
	else if(type == 'index')
		return max_index
	else
		return -2
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}