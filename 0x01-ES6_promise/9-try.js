export default function guardrail(mathFunction) {
	let queue = [];
	const success = true;
	try {
		let res = mathFunction();
		if (success) {
			queue.push(res);
	}} catch(error) {
		queue.push(error);
	} finally {
		queue.push('Guardrail was processed');
	};

	return queue;
}
