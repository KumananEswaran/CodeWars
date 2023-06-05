/*
Instruction
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

function findAverage(array) {
	if (array.length < 1 || array == undefined) {
		return 0;
	} else {
		return (
			array.reduce((accumulator, currentValue) => accumulator + currentValue) /
			array.length
		);
	}
}
