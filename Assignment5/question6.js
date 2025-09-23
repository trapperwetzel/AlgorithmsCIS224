const sortSequences = (sequences, N) => {
  const count = new Array(N).fill(0);

  for (const seq of sequences) {
    
    for (const num of seq) {
      count[num]++;
    }

    
    let index = 0;
    for (let num = 0; num < N; num++) {
      while (count[num] > 0) {
        seq[index++] = num;
        count[num]--;
      }
    }
  }

  return sequences;
};

const sequence1 = [3, 1, 4];
const sequence2 = [2, 4, 1, 0];
const sequences = [sequence1, sequence2];

console.log(sortSequences(sequences, 5));


console.log(sortSequences(sequences, 6));

