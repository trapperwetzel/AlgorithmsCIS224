const bucketsort = (sequence) => {
    const amountOfBuckets = Math.max(...sequence.map(element => element[0])); 
    const buckets = Array.from({length:amountOfBuckets + 1},() => []);

    for(const element of sequence){
        buckets[element[0]].push(element);
    }
    console.log("got all our buckets: ", buckets);

    let position = 0; 
    for(const bucket of buckets){
        for(const element of bucket){
            sequence[position] = element; 
            console.log("Added",element, "to the sorted buckets!");
            position += 1;
        }

    }


    return sequence; 
}








const test = [[1,"a"],[3,"z"],[4,"b"],[3,"a"],[1,"c"]];
console.log(bucketsort(test));
