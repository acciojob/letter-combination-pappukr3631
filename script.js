function letterCombinations(input_digit) {
  //Complete the function
	let arr = ["0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

	let ans = [];
//length of input_digit can be more than 2 so below code fails.
	for(let i=0; i<arr[input_digit[0]].length; i++) {
		for(let j=0; j<arr[input_digit[1]].length; j++) {
			ans.push(arr[input_digit[0]][i]+arr[input_digit[1]][j]);
		}
	}
	let itr = 2;
	while(input_digit.length > itr) {
		let n = ans.length;
		for(let i=0; i<n; i++)
			{
				for(let j=0; j<arr[input_digit[itr]].length; j++)
					{
						ans.push(ans[i]+arr[input_digit[itr]][j]);
					}
			}
		itr++;
	}
	let finalAns = [];

	for(let i=0; i<ans.lenght; i++) {
		if(ans[i].length == input_digit.length)
			finalAns.push(ans[i]);
	}
	return finalAns;
}

module.exports = letterCombinations;
