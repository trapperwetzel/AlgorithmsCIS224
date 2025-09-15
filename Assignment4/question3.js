
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const Trapper = new Person("Trapper",22);
const Trapper2 = new Person("Trapper2",20);
const Trapper3 = new Person("Trapper3",99);
const Trapper4 = new Person("Trapper4", 33);

const selectionSortTrapper = (trappers) => {    

    for(let i = 1; i < trappers.length; i++){
        for(let j = i; j > 0; j--){
            if( trappers[j].age < trappers[j-1].age ) {
                const temp = trappers[j].age;
                trappers[j].age = trappers[j-1].age;
                trappers[j-1].age = temp;
            }
        }
    }

}

const listOfTrappers = [Trapper,Trapper2,Trapper3,Trapper4];
selectionSortTrapper(listOfTrappers);
console.log(listOfTrappers);