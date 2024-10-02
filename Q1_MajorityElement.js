/*
Given an array arr. Find the majority element in the array. If no majority exists, return -1.

A majority element in an array is an element that appears strictly more than arr.size()/2 times in the array.
*/

module.exports = function (arr) {
    let map = {}
    for (let n of arr) {
        if (!map[n]) map[n] = 1
        else map[n]++

        if (map[n] > arr.length / 2) return n
    }
    return -1
}