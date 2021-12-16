/**
 * factorial
 * !n = 1 * 2 * 3 ... n
 * !1 = 1
 * !0 = 1
 * @param {number} n an integer number
 * @returns {number} the factorial of n
 */
const factorial = n => {
  if (n === 1 || n === 0) return 1

  return factorial(n - 1) * n
}

export default factorial
