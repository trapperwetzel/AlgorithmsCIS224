



function evenSum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i += 2) {
    total += arr[i];
  }
  return total;
}

// (b) odd_sum: sum items at odd indexes (1,3,5,...)
function oddSum(arr) {
  let total = 0;
  for (let i = 1; i < arr.length; i += 2) {
    total += arr[i];
  }
  return total;
}

// (c) strange_sum: calls even_sum and odd_sum and adds results
function strangeSum(arr) {
  return evenSum(arr) + oddSum(arr);
}

// (d) wacky_sum: n times call even_sum on the whole array
function wackySum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += evenSum(arr);
  }
  return total;
}

// (e) distinct_2sets: return true if A and B have no common element
function distinct2sets(A, B) {
  for (const a of A) {
    for (const b of B) {
      if (a === b) return false;
    }
  }
  return true;
}

// (f) distinct_3sets_opt1 (naïve triple nested loops):
// return true if A, B, C have no element common to all three
function distinct3setsOpt1(A, B, C) {
  for (const a of A) {
    for (const b of B) {
      for (const c of C) {
        if (a === b && b === c) return false;
      }
    }
  }
  return true;
}

// (g) distinct_3sets_opt2 (checks C only when a === b)
function distinct3setsOpt2(A, B, C) {
  for (const a of A) {
    for (const b of B) {
      if (a === b) {
        for (const c of C) {
          if (a === c) return false;
        }
      }
    }
  }
  return true;
}
