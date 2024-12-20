
/**
 * @param {number} N Number of seats available
 * @param {number} K Social distance factor
 * @param {number} M Number of seats taken
 * @param {number[]} S Array with index(es) of seat(s) taken
 * @return {number} Available spaces for new diners
 */
function getMaxAdditionalDinersCount(N, K, M, S) {
    S.sort((a, b) => {
        if (a < b) return -1
        else if (a > b) return 1
    });

    let availableSpaces = 0;
    let firstSeat = 1;

    S.forEach((seatTaken) => {
        let seatsToTheRight = seatTaken - (K + 1);
        let extraSpace = Math.floor(1 + (seatsToTheRight - firstSeat) / (K + 1));
        
        if (extraSpace > 0) {
            availableSpaces += extraSpace;
        }
        firstSeat = seatTaken + K + 1;
    });

    availableSpaces += Math.floor(1 + (N - firstSeat) / (K + 1));

    // Return the maximum number of additional diners at the table
    return availableSpaces;
}

console.log('Available spaces: ' + getMaxAdditionalDinersCount(10, 1, 2, [2, 6]))
console.log('Available spaces: ' + getMaxAdditionalDinersCount(15, 2, 3, [11, 6, 14]))
