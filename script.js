function letterCombinations(input_digit) {
  //Complete the function
	let arr = ["0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

	let ans = [];

	for(let i=0; i<arr[input_digit[0]].length; i++) {
		for(let j=0; j<arr[input_digit[1]].length; j++) {
			ans.push(arr[input_digit[0]][i]+arr[input_digit[1]][j]);
		}
	}
	return ans;
}

module.exports = letterCombinations;
