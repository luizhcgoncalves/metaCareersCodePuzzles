/**
 * @param {number} A An integer
 * @param {number} B An integer
 * @return {number} the amount of uniform integers ('77', '88'...) between A and B, inclusive
 */
function getUniformIntegerCountInInterval(A, B) {
    const uniform = (num) => {
        const digits = Array.from(num.toString());
        const base = digits[0];

        for (let i = 1; i < digits.length; i++) {
            if (digits[i] !== base) return { digitsLength: digits.length, base: parseInt(base), indexFail: i };
        }

        return { digitsLength: digits.length, base: parseInt(base) };
    }

    let uniformIntegersInBetween = 0;
    let currentInt = A;

    do {
        const { digitsLength, base, indexFail } = uniform(currentInt);
        uniformIntegersInBetween += indexFail === undefined ? 1 : 0;
        console.log({ currentInt, digitsLength, base, indexFail, uniformIntegersInBetween })
        if (indexFail && parseInt(currentInt.toString()[indexFail]) > parseInt(base)) {
            let nextEqualInteger = (1 + base).toString();

            for (let i = 1; i < digitsLength; i++) {
                nextEqualInteger += (1 + base).toString();
            }
            console.log(nextEqualInteger);
            currentInt = parseInt(nextEqualInteger);
        } else {
            let nextEqualInteger = !indexFail ? (1 + base).toString() : base;

            if (indexFail) {
                for (let i = (indexFail + 1); i < digitsLength; i++) {
                    nextEqualInteger += base;
                }
            } else {
                for (let i = (indexFail + 1); i < digitsLength; i++) {
                    nextEqualInteger += (1 + base).toString();
                }
            }

            console.log(nextEqualInteger);
            currentInt = parseInt(nextEqualInteger);
        }
    } while (currentInt <= B);

    return uniformIntegersInBetween;
}

// getUniformIntegerCountInInterval(75, 300);
// getUniformIntegerCountInInterval(1, 9);
// getUniformIntegerCountInInterval(999999999999, 999999999999);
// getUniformIntegerCountInInterval(165165498897, 131356564870);

// console.log(getUniformIntegerCountInInterval(75, 300));
// console.log(getUniformIntegerCountInInterval(1, 9));
//77
//10
// console.log(getUniformIntegerCountInInterval(999999999999, 999999999999));
console.log(getUniformIntegerCountInInterval(131356564870, 965165498897));
222222222222