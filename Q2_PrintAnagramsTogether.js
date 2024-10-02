/*
Given an array of strings, return all groups of strings that are anagrams. 
The groups must be created in order of their appearance in the original array. 

Note: The final output will be in lexicographic order.

Example:
arr: [act,god,cat,dog,tac]
Output:
[act cat tac] 
[god dog]
*/

module.exports = function (arr) {
    let map = {}
    for (let word of arr) {
        let sorted = Array.from(word).sort().join('')

        if (map[sorted]) map[sorted].push(word)
        else map[sorted] = [word]
    }

    return Object.keys(map).map(k => map[k]).sort((a, b) => a[0] < b[0] ? -1 : 1)
}
