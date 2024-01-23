export default function cleanSet(set, startString) {
	if (typeof startString !== 'string') {
		return '';
	}
	let result = '';

	set.forEach((val) => {
		if (val.startsWith(startString) && startString !== '' && startString !== '') {
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
