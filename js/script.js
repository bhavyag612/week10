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

const person ={
    name:['Bob','Smith'],
    age:32,
    gender: 'male',
    interests: ['music','skiing']
}

console.log(`My name is ${person.name[0]}. I am interested and ${person.interests[0]} and ${person.interests[1]}`);

for(let key in person){
    console.log(key);
    console.log(person[key]);
}