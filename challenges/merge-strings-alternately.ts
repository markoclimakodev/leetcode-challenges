/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, 
starting with word1. If a string is longer than the other, append the additional letters onto the
end of the merged string.

Return the merged string.

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
*/

export function mergeAlternately (word1: string, word2: string): string {
  const concatenatedWords = word1.concat(word2);
  const word1Splitted = word1.split('');
  const word2Splitted = word2.split('');

  let mergedWords: string[] = [];

  Array.from(concatenatedWords).forEach((_, index) => {

    if (!!word1Splitted[index] && !!word2Splitted[index]) {
      mergedWords.push(word1Splitted[index]);
      mergedWords.push(word2Splitted[index]);
    }

    if (!word2Splitted[index] && !!word1Splitted[index]) {
      mergedWords.push(word1Splitted[index]);
    }

    if (!word1Splitted[index] && !!word2Splitted[index]) {
      mergedWords.push(word2Splitted[index]);
    }

  });

  return mergedWords.join('');
  };

