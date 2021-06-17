//number.ts
// import add from "./component/number";
import arr from "./component/array";
import func from "./component/function";

const num1 = 9;
const num2 = 2;

// console.log(add(num1, num2));

//arr.ts

// arr();

//Tuple
const brr: [string, number] = ["John", 2];

//enum
enum ROLE {
  admin,
  elder,
  user,
}

const person = {
  name: "hasib",
  age: 22,
  role: ROLE.admin,
};

// if (person.role === ROLE.admin) {
//   console.log("Now here this, Now here this. This is the Admin!");
// }

//type aliases
type CustomType = number | string;
type Availability = "isActive" | "isStop";

function alias(a: CustomType, b: Availability) {
  if (b === "isActive") {
    // console.log("walaa Motor is running!");
  }
  if (b === "isStop") {
    // console.log("Our main motor is now stationary.");
  }
}
alias("true", "isStop");

//function
// func();

//callback function type
function subtract(a: number, b: number, cb: (result: number) => void) {
  const result = a - b;
  cb(result);
}

subtract(23, 3, (result) => {
  console.log(`This is the result ${result}`);
});

//function as a type
const ananomous: (a: boolean, b: number) => void = (a, b) => {
  if (a) {
    console.log(b);
  }
};

// ananomous(true, 234);

//unknown type
let product: unknown;
let user: string;

product = 23;
product = "hasib";
if (typeof product === "string") {
  user = product;
}

//select HTML element
const userInput = document.querySelector(".user-input") as HTMLInputElement;
// userInput.value = "hasib is .....";

//optional chaining
const agent = {
  name: "hasib",
  title: "dev",
  job: {
    // category: 'simple',
    ocupation: "dev",
  },
};

// console.log(agent?.job?.category);

//Nullish coalescing
const values = false;
const storeValues = values ?? "default";
console.log(storeValues);

//generic type
const rsBack: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`I'm resolved!`);
  }, 2000);
});

rsBack.then((data) => {
  console.log(data);
});

const rsBack2: Promise<Array<number | string>> = new Promise(
  (resolve, reject) => {
    setTimeout(() => {
      resolve([3, 3, 5, 2, "hei"]);
    }, 2000);
  }
);

// rsBack2.then((data) => {
//   console.log(data);
// });

function merge<T, U extends object, A>(obj: T, objA: U, objC: A) {
  return { ...obj, ...objA, ...objC };
}

const valueOutput = merge(
  { name: "noma", age: 23 },
  { age: 22, name: "hasib", class: "nohing" },
  23
);
// console.log(valueOutput);

// key of constraints

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `value ${obj[key]}`;
}

interface Lengthy {
  length: number;
}

function countPropertyLength<T extends Lengthy>(value: T): [T, string] {
  let message = "property has no length";

  if (value.length === 1) {
    message = "property has 1 length";
  }

  if (value.length > 1) {
    message = "the property length is " + value.length;
  }
  return [value, message];
}

const result = countPropertyLength("hallow world");
console.log(result);

// function overload example
type Combinable = string | number;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

const addResult = add(2, 3);
console.log(addResult);

// Optional chaining
const optionalObj = {
  name: "hasib",
  age: 22,
  role: { title: ["student", "dev"] },
};

console.log(optionalObj?.role?.title);

const userInputs = undefined;

const output = userInput ?? "Okay";
console.log(output);
