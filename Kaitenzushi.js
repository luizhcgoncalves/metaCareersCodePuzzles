/**                                                                                         Constraints
 * @param {number} N number of dishes in a row on a kaiten belt                             | 1 <= N <= 500,000
 * @param {number[]} D sequence of dishes being served                                      | 1 <= D.length <= 1,000,000
 * @param {number} K reference for different dishes in K intervals, or they are not eaten   | 1 <= K <= N 
 * @return {number} dishes eaten
 */

function getMaximumEatenDishCount(N, D, K) {
    let dishesEaten = 0
    const map = {}

    for (let i = 0; i < N; i++) {
        const currentDish = D[i];

        if (map[currentDish] === undefined || map[currentDish] + K <= dishesEaten) {
            map[currentDish] = ++dishesEaten;
        }
    }

    return dishesEaten;
}

// getMaximumEatenDishCount(6, [1, 2, 3, 3, 2, 1], 1)
// getMaximumEatenDishCount(6, [1, 2, 3, 3, 2, 1], 2)
// getMaximumEatenDishCount(7, [1, 2, 1, 2, 1, 2, 1], 2)

console.log(getMaximumEatenDishCount(6, [1, 2, 3, 3, 2, 1], 1))
console.log(getMaximumEatenDishCount(6, [1, 2, 3, 3, 2, 1], 2))
console.log(getMaximumEatenDishCount(7, [1, 2, 1, 2, 1, 2, 1], 2))