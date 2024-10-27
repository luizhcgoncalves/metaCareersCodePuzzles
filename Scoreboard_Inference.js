/**
 * Each problem from the exam can award 1 or 2 points 
 *                                                                                  Constraints
 * @param {number} N Amount of competitors                                          1 <= N <= 500,000
 * @param {number[]} S Sum of the point values of all problems they have solved     1 <= Si <= 1,000,000,000
 * @return {number} Minimum possible problems in the contest                        
 */
function getMinProblemCount(N, S) {
    let maximum = 0;
    let oddNumbers = false;

    // I tried using Math.max(...S) and S.some(x => x % 2 === 1) for these
    // but it got runtime errors in some test cases, which I suspected would
    // as these would loop through the array twice, and as N <= 500,000 that
    // would at least extrapolate the time in some. So looping once is better.
    for (let i = 0; i < N; i++) {
        // I need the maximum score in the set
        if (S[i] > maximum) {
            maximum = S[i]
        }

        // The left hand operator being a boolean value makes sure the second
        // hand operator, which is a formula that must be evaluated, is short-
        // circuited once any odd number is found, saving on performance
        if (!oddNumbers && S[i] % 2 === 1) {
            oddNumbers = true
        }
    }

    // 1. If Si <= 1,000,000,000 means the MOST amount would 500,000,000 2-point
    // problemsj, as that's the least amount of problems to make that score.
    // 2. If Si = 999,999,999, it's impossible to divide by 2 without a rest of 1
    // That means one of those 2's have to be an one [...]
    let leastAmount = 
        maximum % 2 === 0 // Check if maximum is divisible by 2
        ? maximum / 2 // Situation 1
        : ((maximum + 1) / 2);      // Situation 2. [...] So one is added to  the 
                                    // maximum, and the result if divided by 2.

    // The problem is when the maximum is divisible by 2, but there are odd numbers
    // in the set. Then you need to add another question to be an 1-point question
    // With maximum = 7 for example you would get ((7 - 1) / 2) + 1 = {2, 2, 2, 1}
    // That last 1 is added here  
    if (oddNumbers && maximum % 2 === 0) {
        leastAmount++;
    }

    // Notice the amount of 1s and 2s is irrelevant. There will never be more than
    // two 1s, because otherwise that would not be optimal. So for that Si = 999,999,999
    // You would need the same as you would if Si = 999,999,998, and another 1-point
    // problem. If there are more than 2 odd numbers in the set, then one of those
    // 2=point questions is actually an 1-point question, but the amount of each is
    // not important for the problem anyway, it was just showing an example of a result set.

    return leastAmount;
}

console.log(getMinProblemCount(6, [1, 2, 3, 4, 5, 6])); // 4
console.log(getMinProblemCount(4, [4, 3, 3, 4])); // 3
console.log(getMinProblemCount(4, [2, 4, 5, 8])); // 5
console.log(getMinProblemCount(4, [2, 4, 1000000000, 8])); // 500,000,000
console.log(getMinProblemCount(4, [2, 4, 1, 8])); // 5
console.log(getMinProblemCount(2, [1, 2])); // 2
console.log(getMinProblemCount(3, [1, 2, 999999999])) // 500,000,000d
console.log(getMinProblemCount(4, [1, 1, 1, 1])) // 1
console.log(getMinProblemCount(4, [2, 2, 2, 2])) // 1
console.log(getMinProblemCount(4, [2, 2, 1, 2])) // 2
console.log(getMinProblemCount(4, [2, 2, 1, 3])) // 2