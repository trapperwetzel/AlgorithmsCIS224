// write a function that is a radix sort
// it should take in a list of words and return a list of words sorted in lexicographical order 
var radixSort = function (words) {
    if (words.length === 0) {
        return [];
    }
    var wordLength = words[0].length;
    // helper 
    var radixHelper = function (helperWords, index) {
        var output = new Array(helperWords.length);
        var count = new Array(26).fill(0);
        for (var _i = 0, helperWords_1 = helperWords; _i < helperWords_1.length; _i++) {
            var word = helperWords_1[_i];
            var charCount = word.charCodeAt(index) - 97;
            count[charCount]++;
        }
        for (var i = 1; i < 26; i++) {
            count[i] += count[i - 1];
        }
        for (var i = helperWords.length - 1; i >= 0; i--) {
            var charCount = helperWords[i].charCodeAt(index) - 97;
            output[count[charCount] - 1] = helperWords[i];
            count[charCount]--;
        }
        return output;
    };
    var result = words.slice();
    for (var i = wordLength - 1; i >= 0; i--) {
        result = radixHelper(result, i);
    }
    return result;
};
var test = ["apple", "three", "ashes", "trees", "thank", "lamps"];
console.log(radixSort(test)); // should be apples ashes lamps thank three trees 
