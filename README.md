# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

Answer: 

The runtime complexity of the algorithm is factorial, O(n!). 

A best-case input is a sorted list like [1,2,3]. The algorithm will check the first permutation it generates and find it sorted right away. The best case: O(n), because it only checks one permutation and stops. A worst-case input is a reverse-sorted list like [3, 2, 1]. The algorithm will generate and check all permutations before finding the sorted one at the very end. Worst case: O(n⋅n!), where n accounts for the cost of checking each permutation.

Random will save space but could be slower due to repeats. Who knows how long that'll take? You may get it the first time or it will take n random tries because there’s a 1/n chance of getting the correct permutation each time.
