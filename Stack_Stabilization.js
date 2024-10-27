/**                                                                                         Constraints
 * @param {number} N Amount of inflatable discs on the stack                                1 <= N <= 50
 * @param {number[]} R Sequential radius os disks from top R[0] to bottom R[N-1]     1 <= Ri <= 1,000,000,000
 * @return {number} Disks to deflate to make the stack stable
 */
function getMinimumDeflatedDiscCount(N, R) {
    let diskCount = 0;
    
    for (let i = (N - 2), previousDisk = R[N - 1]; i >= 0; previousDisk = R[i--]) {
        if (R[i] >= previousDisk && R[i] > 1) {
            R[i] = previousDisk - 1;
            diskCount++;
        }

        if (R[i] <= 0) return -1;
    }

    return diskCount;
}

// getMinimumDeflatedDiscCount(5, [2, 5, 3, 6, 5]);
// getMinimumDeflatedDiscCount(3, [100, 100, 100]);
// getMinimumDeflatedDiscCount(4, [6, 5, 4, 3]);

console.log(getMinimumDeflatedDiscCount(5, [2, 5, 3, 6, 5]));
console.log(getMinimumDeflatedDiscCount(3, [100, 100, 100]));
console.log(getMinimumDeflatedDiscCount(4, [6, 5, 4, 3]));