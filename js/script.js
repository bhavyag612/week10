// for(let i=0;i<100000;i++){
//     console.log(i);
// }

// for(let i=1;i<=10;i++){
//     console.log(2 **i);
// }
// i=1;
// while (i<=10){
//     console.log(2**i);
//     i++;
// }
// let user_name; //prompt always return string
// do{
//     user_name= prompt("What is your name? "); //prompt always return string
//     //therefore convert into number
//     //if input is string, Number(user_name)=NaN

// }while(!(isNaN(Number(user_name))));
// // alert("Hello "+input);
// alert(`hello ${user_name}`);

// let fruits=['Apple','Banana'];
// fruits.push('Orange');

// fruits.pop();

// fruits.unshift('Mango');

// fruits.shift();

// const person ={
//     name:['Bob','Smith'],
//     age:32,
//     gender: 'male',
//     interests: ['music','skiing']
// }

// console.log(`My name is ${person.name[0]}. I am interested and ${person.interests[0]} and ${person.interests[1]}`);

// for(let key in person){
//     console.log(key);
//     console.log(person[key]);
// }

let student1 = {
    ID: "A00022",
    GPA: 3.0,
    program: "CIT"
};
let student2 = {
    ID: "A01000",
    GPA: 3.1,
    program: "CST"
};
let student3 = {
    ID: "A00114",
    GPA: 3.2,
    program: "CIT"
};
let students = [student1, student2, student3];
let counter=0;
for (let student of students){
    if (student["program"]=== "CIT" && student["GPA"]>3){
        counter++;
        console.log(student);
    }
}
console.log(counter)