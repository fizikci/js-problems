/*
The stock span problem is a financial problem where we have a series of n daily price quotes for a stock and 
we need to calculate the span of stocks price for all n days. 
The span Si of the stocks price on a given day i is defined as the maximum number of consecutive days just before the given day, 
for which the price of the stock on the given day is less than or equal to its price on the current day.

For example, if an array of 7 days prices is given as {100, 80, 60, 70, 60, 75, 85}, 
then the span values for corresponding 7 days are {1, 1, 1, 2, 1, 4, 6}.
*/

module.exports = function (price) {
    let stack = []
    let span = []

    for (let i = 0; i < price.length; i++) {
        while (stack.length && price[stack[stack.length - 1]] <= price[i]) stack.pop()

        span[i] = stack.length ? i - stack[stack.length - 1] : i + 1
        stack.push(i)
    }

    return span
}