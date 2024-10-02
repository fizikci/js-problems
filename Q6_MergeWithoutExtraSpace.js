/*
Merge Without Extra Space

Given two sorted arrays arr1[] and arr2[] of sizes n and m in non-decreasing order. Merge them in sorted order without using any extra space. Modify arr1 so that it contains the first N elements and modify arr2 so that it contains the last M elements.


Example: 

Input: 
n = 4, arr1[] = [1 3 5 7] 
m = 5, arr2[] = [0 2 6 8 9]
Output: 
arr1[] = [0 1 2 3]
arr2[] = [5 6 7 8 9]
*/

module.exports = function (arr1, arr2) {
    let i = arr1.length - 1, j = 0

    while (i > -1 && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            [arr1[i], arr2[j]] = [arr2[j], arr1[i]]
            i--
            j++
        }
        else break
    }
    arr1 = arr1.sort((a, b) => a - b)
    arr2 = arr2.sort((a, b) => a - b)

    return [arr1, arr2]
}

/*
Solution:
Start from the end of arr1 and the beginning of arr2.
If arr1[i] > arr2[j], swap the elements and move i to the left and j to the right.
This way, arr1 will have the small elements and arr2 will have the large elements.
Sort both arrays.
Time Complexity: O(nlogn + mlogm)
*/