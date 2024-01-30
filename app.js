//1.
let country = 'India';
let = 'Asia';
let = 1380000000; // in thousands
console.log(`Country: ${country}, Continent: ${continent}, Population: ${population}`);


//2.
let isIsland = false;
let language; // value will be assigned later
console.log(typeof isIsland, typeof population, typeof country, typeof language);





//3.
language = 'Hindi'; // no need to use let or const here as variable is already declared
const CURRENT_YEAR = new Date().getFullYear(); // this value will not change
let currentPopulation = population; // this value might change in future
console.log(`Country: ${country}, Language: ${language}, Current Year: ${CURRENT_YEAR}, Current Population: ${currentPopulation}`);
// trying to change a const variable
// CURRENT_YEAR = 2022; // this will throw an error


//4.
let halfPopulation = population / 2;
console.log(`Half population: ${halfPopulation}`);
currentPopulation++;
console.log(`Current population: ${currentPopulation}`);
let finlandPopulation = 6000000;
console.log(`Does India have more people than Finland? ${population > finlandPopulation}`);
let averagePopulation = 33000000
console.log(`Does India have less people than the average country? ${population < averagePopulation}`);
let description = `${country} is in ${continent}, and its ${currentPopulation} people speak ${language}`;
console.log(description);


//5.
let descriptionTemplate = `${country} is in ${continent}, and its ${currentPopulation} people speak ${language}`;
console.log(descriptionTemplate);


//6.
if (currentPopulation > averagePopulation) {
    console.log(`${country}'s population is above average`);}
     else {
    console.log(`${country}'s population is ${averagePopulation - currentPopulation} million below average`);}
  currentPopulation = 13000000;
  if (currentPopulation > averagePopulation) {
    console.log(`${country}'s population is above average`);
  } else {
    console.log(`${country}'s population is ${averagePopulation - currentPopulation} million below average`);
  }
  currentPopulation = 130000000;
  if (currentPopulation > averagePopulation) {
    console.log(`${country}'s population is above average`);
  } else {
    console.log(`${country}'s population is ${averagePopulation - currentPopulation} million below average`);
  }


//7.
console.log(9 - '5'); // 4
console.log(19 - '13' + '17'); // 1317
console.log(19 - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 154



//8.
let numNeighbours = prompt('How many neighbour countries does your country have?');
if (numNeighbours == 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border');
} else {
  console.log('No borders');
}
// testing with different values
numNeighbours = 0;
if (numNeighbours == 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border');
} else {
  console.log('No borders');
}
// using strict equality
if (numNeighbours === 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border');
} else {
  console.log('No borders');
}
// converting input to a number
numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
if (numNeighbours === 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border');
} else {
  console.log('No borders');
}




//9.
// resetting variables
isIsland = false;
language = 'English';
currentPopulation = 50000000;
// logical and (&&)
if (language === 'English' && currentPopulation < 50000000 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}
// logical or (||)
if (language === 'English' || currentPopulation < 50000000 || !isIsland) {
  console.log(`You can consider living in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}




//10.
language = 'Spanish';
switch (language) {
  case 'Chinese':
  case 'Mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'Spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'English':
    console.log('3rd place');
    break;
  case 'Hindi':
    console.log('Number 4');
    break;
  case 'Arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D');
}




//11.
if (currentPopulation > averagePopulation) {
    console.log(`${country}'s population is above average`);
  } else {
    console.log(`${country}'s population is below average`);
  }
  // using ternary operator
  console.log(currentPopulation > averagePopulation ? `${country}'s population is above average` : `${country}'s population is below average`);



// 1. **Print "Hello, World!" to the Console**:
console.log("Hello, World!");


//2. **Declare and Initialize a Variable**:
message = "Hello, JavaScript!";
console.log(message);


//3. **Use Arithmetic Operators**:
const number1 = 10;
const number2 = 20;
const sum = number1 + number2;
const difference = number2 - number1;
const product = number1 * number2;
const quotient = number2 / number1;
const remainder = number2 % number1;
console.log(`Sum: ${sum}, Difference: ${difference}, Product: ${product}, Quotient: ${quotient}, Remainder: ${remainder}`);



//4. **Use Comparison Operators**:
const num1 = 10;
const num2 = 5;
if (num1 > num2) {
  console.log(`${num1} is greater than ${num2}`);
} else if (num1 < num2) {
  console.log(`${num1} is less than ${num2}`);
} else {
  console.log(`${num1} is equal to ${num2}`);
}



//5. **Use Logical Operators**:
age = 20;
const isCitizen = true;

if (age >= 18 && isCitizen) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}



//6. **Create an Array**:
fruits = ["apple", "orange", "banana", "grape"];
console.log(fruits);



//7. **Access Array Elements**:
fruits = ["apple", "orange", "banana", "grape"];
console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "banana"



//8. **Loop Through an Array**:
const fruits = ["apple", "orange", "banana", "grape"];
fruits.forEach((fruit) => {
  console.log(`Fruit: ${fruit}`);
});



//9. **Create a Function**:
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet("John"); // "Hello, John!"



//10. **Use a Conditional Operator (Ternary Operator)**:
const age = 20;
const message = age >= 18 ? "Eligible to vote" : "Not eligible to vote";
console.log(message); // "Eligible to vote"