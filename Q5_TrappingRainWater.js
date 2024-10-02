/*
Given an array arr[] with non-negative integers representing the height of blocks. 
If width of each block is 1, compute how much water can be trapped between the blocks during the rainy season. 
 
Example:
Input: arr[] = [3,0,0,2,0,4]
Output: 10
     |
|OOOO|
|OO|O|
|OO|O|
(O is water, | is block)
*/

module.exports = function (arr) {
    let leftMax = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        leftMax.push(Math.max(leftMax[i - 1], arr[i]))
    }
    let rightMax = [arr[arr.length - 1]]
    for (let i = 1; i < arr.length; i++) {
        rightMax.push(Math.max(rightMax[i - 1], arr[arr.length - i - 1]))
    }
    rightMax = rightMax.reverse()

    let water = 0
    for (let i = 0; i < arr.length; i++) {
        water += Math.min(leftMax[i], rightMax[i]) - arr[i]
    }

    return water
}