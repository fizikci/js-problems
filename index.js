let questions = [
    { title: "Majority Element", path: "./Q1_MajorityElement", params: [[3, 1, 3, 3, 2]] },
    { title: "Print Anagrams Together", path: "./Q2_PrintAnagramsTogether", params: [["god", "act", "cat", "dog", "tac"]] },
    { title: "Stock Span Problem", path: "./Q3_StockSpanProblem", params: [[100, 80, 60, 70, 60, 75, 85]] },
    {
        title: "Replace Os with Xs", path: "./Q4_ReplaceOsWithXs", params: [
            [
                ['X', 'X', 'X', 'X'],
                ['X', 'O', 'X', 'X'],
                ['X', 'O', 'O', 'X'],
                ['X', 'O', 'X', 'X'],
                ['X', 'X', 'O', 'O']
            ]
        ]
    },
    { title: "Trapping Rain Water", path: "./Q5_TrappingRainWater", params: [[3, 0, 0, 2, 0, 4]] },
    { title: "Merge Without Extra Space", path: "./Q6_MergeWithoutExtraSpace", params: [[1, 3, 5, 7], [0, 2, 6, 8, 9]] },
]

for (let q of questions) {
    let fn = require(q.path)
    console.log(`\n\n${q.title}:`)
    console.log("--------------------")
    console.log("Input:\n", ...q.params)
    console.log("Output:\n", fn(...q.params))
}