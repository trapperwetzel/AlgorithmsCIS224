
function bucketSort(arr: [number, string][]): [number, string][] {

    const numOfBuckets = Math.max(...arr.map(element => element[0])); // get the number of buckets by getting the max value 
    const buckets: [number,string][][] = Array.from({length:numOfBuckets + 1}, () => []) // create our buckets 

    // fill the buckets
    for(const element of arr){
        buckets[element[0]]?.push(element);
    }

    let position = 0; 
    for(const bucket of buckets) {
        while (bucket.length > 0) {
            while(bucket.length > 0){
                arr[position] = bucket.pop()!;
                position++;
            }
        }
    }

    return arr; 

}

const arr: [number,string][] = [[1,'a'], [3,'z'], [4, 'b'], [3, 'a'], [1,'c']];


console.log(arr);
console.log(bucketSort(arr));