/*
Given a matrix mat of size N x M where every element is either 'O' or 'X'. 
Replace all 'O' or a group of 'O' with 'X' that are surrounded by 'X'.

A 'O' (or a set of 'O') is considered to be surrounded by 'X' if there are 
'X' at locations just below, just above, just left and just right of it.

Example:

Input: 
n = 5, m = 4
mat = {{'X', 'X', 'X', 'X'}, 
       {'X', 'O', 'X', 'X'}, 
       {'X', 'O', 'O', 'X'}, 
       {'X', 'O', 'X', 'X'}, 
       {'X', 'X', 'O', 'O'}}
Output: 
ans = {{'X', 'X', 'X', 'X'}, 
       {'X', 'X', 'X', 'X'}, 
       {'X', 'X', 'X', 'X'}, 
       {'X', 'X', 'X', 'X'}, 
       {'X', 'X', 'O', 'O'}}
Explanation: 
Following the rule the above matrix is the resultant matrix. 
*/

function dfs(a, i, j) { // a is array, i is row, j is column
    if (i < 0 || i == a.length || j < 0 || j == a[0].length || a[i][j] != 'O') return;

    a[i][j] = 'B';

    dfs(a, i - 1, j);
    dfs(a, i + 1, j);
    dfs(a, i, j - 1);
    dfs(a, i, j + 1);
}
module.exports = function (a) { // a is array
    // fill border Os with B
    for (let i = 0; i < a[0].length; i++) {
        dfs(a, 0, i);
        dfs(a, a.length - 1, i);
    }
    for (let i = 1; i < a.length - 1; i++) {
        dfs(a, i, 0);
        dfs(a, i, a[0].length - 1);
    }

    // fill remaining Os with X
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            if (a[i][j] == 'O') a[i][j] = 'X';
        }
    }

    // put Os back for Bs
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            if (a[i][j] == 'B') a[i][j] = 'O';
        }
    }

    return a;
}

/*
Solution:
Use Depth First Search (DFS) to traverse the matrix.
Fill the border 'O's and the 'O's connected to them with a different character, say 'B'.
Replace all the remaining 'O's with 'X'.
Replace all the 'B's with 'O's.
Time Complexity: O(N * M)
*/