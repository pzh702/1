/**
 *
 * @param {nums[][]} firstList
 * @param {nums[][]} secondList
 * @return {nums[][]}
 */
var intervalIntersection = function (firstList, secondList) {
	let res = [];
	let i = 0,
		j = 0;
	while (i < firstList.length && j < secondList.length) {
		let low = Math.max(firstList[i][0], secondList[j][0]);
		let high = Math.min(firstList[i][1], secondList[j][1]);
		if (low <= high) {
			res.push([low, high]);
		}
		if (firstList[i][1] < secondList[j][1]) {
			i++;
		} else {
			j++;
		}
	}
	return res;
};

let res = intervalIntersection(
	[
		[1, 3],
		[5, 7],
	],
	[[2, 6]]
);
console.log(res);
