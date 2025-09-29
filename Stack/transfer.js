function transfer(S, T) {
  while (S.length > 0) {
    T.push(S.pop());
  }
  return T;
}
const test = [1, 2, 3, 4];





function reverseStack(S) {
  const T1 = [];
  const T2 = [];

  transfer(S, T1);
  transfer(T1, T2);
  transfer(T2, S);

  return S;
}


console.log(transfer(test, []));
const testArr = [...test];
console.log(reverseStack(testArr));

