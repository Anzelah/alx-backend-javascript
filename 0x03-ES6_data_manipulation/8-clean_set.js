export default function cleanSet(set, startString) {
	let result = '';

	set.forEach((val) => {
		if (val.startsWith(startString) && startString !== '' && typeof startString === 'string') {
			let str = val.substring(startString.length);
			result += str + '-';
		}
		return result;
	});

	if (result.endsWith('-')) {
	    result = result.slice(0, -1);
 	}


	return result;
}
