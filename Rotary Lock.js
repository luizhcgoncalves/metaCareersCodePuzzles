/**                                                                                 Constraints
 * @param {number} N Amount of Integers on the Lock                                 3 <= N <= 50,000,000
 * @param {number} M Amount of Integers that must be selected to open the lock      1 <= M <= 1,000
 * @param {number[]} C Array of Integers that make the code                         1 <= Ci <= N
 * @return {number} How many seconds to decode? Takes 1 second to rotate the lock mechanism one integer at a time in EITHER DIRECTION
 */
function getMinCodeEntryTime(N, M, C) {    
    let secondsToDecode = 0;
    
    for(let i = 0, initialPosition = 1; i < M; i++) {
        const code = C[i];
        const distance = Math.abs(initialPosition - code);
        
        if(distance > (N/2)) {
            secondsToDecode += N - distance
        } else {
            secondsToDecode += distance
        }

        initialPosition = code;
    }

    return secondsToDecode
}

// getMinCodeEntryTime(3, 3, [1, 2, 3]);
// getMinCodeEntryTime(10, 4, [9, 4, 4, 8]);

console.log(getMinCodeEntryTime(3, 3, [1, 2, 3]));
console.log(getMinCodeEntryTime(10, 4, [9, 4, 4, 8]));