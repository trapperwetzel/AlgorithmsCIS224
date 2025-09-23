// write a function that is a radix sort
// it should take in a list of words and return a list of words sorted in lexicographical order 
// trying out typescript (sorry)
const radixSort = (words: string[]): string[] => {

    if (words.length === 0){
        return []; 
    }

    const wordLength = words[0].length;

    // helper 
    const radixHelper = (helperWords: string[], index: number): string[] => {
        const output: string[] = new Array(helperWords.length);
        const count: number[] = new Array(26).fill(0);

        for(const word of helperWords) {
            const charCount = word.charCodeAt(index) - 97;
            count[charCount]++;
        }

        for(let i = 1; i < 26; i++){
            count[i] += count[i-1];
        }
        for(let i = helperWords.length - 1; i >= 0; i--){
            const charCount = helperWords[i].charCodeAt(index) - 97;
            output[count[charCount] - 1] = helperWords[i];
            count[charCount]--;
        }

        return output;
    }
    let result = words.slice();
    for(let i = wordLength - 1; i >= 0; i--){
        result = radixHelper(result, i);
    }
    return result;

}

const test = ["apple", "three", "ashes", "trees", "thank", "lamps"];
console.log(radixSort(test)); // should be apples ashes lamps thank three trees 

