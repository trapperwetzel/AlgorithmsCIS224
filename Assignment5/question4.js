const sortByVowels = (words) => {
    const vowels = new Set(['a','e','i','o','u']);

    const decorated = words.map(word => {
        const vowelCount = [...word].filter(ch => vowels.has(ch)).length;
        return [vowelCount, word];
    })

    decorated.sort((a,b) => a[0] - b[0]);

    return decorated.map(item => item[1]);

}


const test = ["forest", "prisoner", "juxtaposition", "superfluous", "trees", "dip", "lamps", "meadow"];
console.log(sortByVowels(test));

