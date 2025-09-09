
//write a recursive function that takes a string s and outputs its reverse.

const reverse = (s) => {

    //base case
    if(s.length == 0){
        return ""
    }
    // recursive case using substring to reverse letter by letter. 
    else {
        return reverse(s.substring(1)) + s[0]
    }

}

const test = reverse("pots&pans");

console.log(test);