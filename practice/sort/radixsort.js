
const bucketSort = (words,position) => {
    const buckets = Array.from({length:26}, () =>[]);
    console.log(words);    
    for(let word of words){
        const index = word.charCodeAt(position) - 97; // 'a' = 97
        buckets[index].push(word);
    }

    return [].concat(...buckets)
    
}



const radixsort = (words) => {
    const wordLength = Math.max(...words.map(w => w.length));
    for(let position = wordLength - 1; position >= 0; position --){
        words = bucketSort(words,position);
    }
    return words; 
}


const input = ["apple", "three", "ashes", "trees", "thank", "lamps"];
console.log(radixsort(input));

