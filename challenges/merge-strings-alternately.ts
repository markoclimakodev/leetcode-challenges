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

