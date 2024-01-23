export default function cleanSet(set, startString) {
	let result = '';

	set.forEach((val) => {
		if (val.startsWith(startString) && startString !== '') {
			let str = val.substring(startString.length);
			result += str + '-';
		}
	});

	if (result.endsWith('-')) {
	    result = result.slice(0, -1);
 	}


	return result;
}
