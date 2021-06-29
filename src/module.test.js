const testCase = 'Valuer of Freedom';
const multiplier = 4;
const freeCases = 10;

function testFreedom(...args) {
	args = args;
	let result = 0;
	args.forEach(item => {
		result += item * multiplier - freecases;
	});
	return result;
}

testFreedom(10, 20, 30, 1, 2, 5, 10);
