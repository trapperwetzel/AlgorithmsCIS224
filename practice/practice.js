
class ArrayList{

  constructor(array = []){
    this.array = array;
  };

  insert = (item) => {
    this.array.push(item)
  }

  toString = () => {
    return this.array.join();
  }




}

const test = new ArrayList();

test.insert(5);

console.log(test.toString());
