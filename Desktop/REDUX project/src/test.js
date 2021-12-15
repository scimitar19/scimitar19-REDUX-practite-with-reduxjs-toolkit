const something = () => {
  var greeting = "hello I'm back";
  return { greeting };
};

const objects = { name: "Kreg", age: 29 };

const { name: newName, age: newAge } = objects;

// console.log(newName);

let news = something();

//console.log(something());

const { greeting: aloha } = news;

// console.log(aloha)
