/**
 * Each problem fromm the exam can award 1 or 2 points 
 *                                                                                  Constraints
 * @param {number} N Amount of competitors                                          1 <= N <= 500,000
 * @param {number[]} S Sum of the point values of all problems they have solved     1 <= Si <= 1,000,000,000
 * @return {number} Minimum possible problems in the contest                        
 */
function getMinProblemCount(N, S) {
    let maximum = 0;
    let oddNumbers = false;

    for (let i = 0; i < N; i++) {
        if (S[i] > maximum) {
            maximum = S[i]
        }

        if (!oddNumbers && S[i] % 2 === 1) {
            oddNumbers = true
        }
    }

    let leastAmount = maximum % 2 === 0 ? maximum / 2 : ((maximum - 1) / 2) + 1;

    if (oddNumbers && maximum % 2 === 0) {
        leastAmount++;
    }

    return leastAmount;
}

// getMinProblemCount(6, [1, 2, 3, 4, 5, 6]);
// getMinProblemCount(4, [4, 3, 3, 4]);
// getMinProblemCount(4, [2, 4, 6, 8]);

console.log(getMinProblemCount(6, [1, 2, 3, 4, 5, 6])); // 4
console.log(getMinProblemCount(4, [4, 3, 3, 4])); // 3
console.log(getMinProblemCount(4, [2, 4, 6, 8])); // 4
console.log(getMinProblemCount(2, [1, 2])); // 2
console.log(getMinProblemCount(3, [1, 2, 1000000000]))
// console.log(getMinProblemCount(500000,))
