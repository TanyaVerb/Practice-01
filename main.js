const users = [
  {
    fio: "Иванова Елена Викторовна",
    login: "alena_21",
    age: 25,
  },
  {
    fio: "Маркова Мария Викторовна",
    login: "mark1",
    age: 20,
  },
  {
    fio: "Петров Игорь Витальевич",
    login: "nikP",
    age: 24,
  },
  {
    fio: "Семенов Вадим Алексеевич",
    login: "SemV",
    age: 28,
  },
  {
    fio: "Ленина Екатерина Петровна",
    login: "Katy555",
    age: 33,
  },
  {
    fio: "Дибров Олег Сергеевич",
    login: "Dib17",
    age: 17,
  },
  {
    fio: "Матузко Олеся Вячеславовна",
    login: "Matyzko",
    age: 45,
  },
  {
    fio: "Вихрова Милана Игоревна",
    login: "Milano77",
    age: 47,
  },
];

let newList = [];

// for (const user of users) {
//   if (user.age < 20) {
//     newList.push(user);
//   }
//   console.log(user);
// }
// for (const user of users) {
//   if (user.fio.includes("Иван") == true) {
//     newList.push(user);
//   }
// }
// console.log(newList);

function filter(arr, prop, value) {
  let result = [],
    copy = [...arr];

  for (const item of copy) {
    if (String(item[prop]).includes(value) == true) result.push(item);
  }
  return result;
}

function render(arr) {
  const list = document.querySelector(".user-list");
  list.innerHTML = "";

  const fioVal = document.getElementById("inp-fio").value,
    ageVal = document.getElementById("inp-age").value;

  let newArr = [...arr];

  if (fioVal !== "") newArr = filter(newArr, "fio", fioVal);
  if (ageVal !== "") newArr = filter(newArr, "age", ageVal);

  for (const user of newArr) {
    const li = document.createElement("Li");
    li.textContent = user.fio + ", Age: " + user.age;
    list.append(li);
  }
}

// document.getElementById("filter-form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   render(users);
// });
// render(users);

let arr = [4, 6, 7, 1, 12, 6, 8];

function sortUsers(arr, prop, dir = false) {
  return arr.sort((a, b) => {
    if (dir == false ? a[prop] < b[prop] : a[prop] > b[prop]) return -1;
  });
}
const sortUsers2 = (arr, prop, dir = false) =>
  arr.sort((a, b) => ((!dir ? a[prop] < b[prop] : a[prop] > b[prop]) ? -1 : 0));

console.log(sortUsers(users, "age", true));
console.log(sortUsers2(users, "fio", true));

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  geese.forEach((el) => {
    const geese = [
      "African",
      "Roman Tufted",
      "Toulouse",
      "Pilgrim",
      "Steinbacher",
    ];
    return arr.filter((item) => !geese.includes(item));
  });
}

console.log(
  gooseFilter([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ]),
  ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
);

function addLength(str) {
  let arr = str.split(" ").map((el) => `${el} ${el.length}`);
  return arr.join(",");
}

console.log(addLength("apple ban"));

function divisibleBy(numbers, divisor) {
  let numbersNew = numbers.filter((el) => el % divisor == 0);
  return numbersNew;
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));

function findNeedle(haystack) {
  // your code here
  let ind = haystack.indexOf("needle");
  return `found the needle at position ${ind}`;
}

console.log(
  findNeedle([
    "3",
    "123124234",
    undefined,
    "needle",
    "world",
    "hay",
    2,
    "3",
    true,
    false,
  ])
);

function invert(array) {
  return array.map((el) => {
    return -el;
  });
}

console.log(invert([1, 2, 3, 4, 5]));
console.log(invert([1, -2, 3, -4, 5]));
console.log(invert([]));

function getAverage(marks) {
  let res = marks.reduce((acc, el) => {
    return acc + el;
  });
  return Math.ceil(res / marks.length);
}

console.log(getAverage([2, 2, 2, 2]));

function monkeyCount(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(monkeyCount(5));

function adjacentElementsProduct(array) {
  let arr = [];
  for (let i = 0; i < array.length - 1; i++) {
    arr.push(array[i] * array[i + 1]);
  }
  return Math.max(...arr);
}

console.log(adjacentElementsProduct([5, 8]));
console.log(adjacentElementsProduct([4, 12, 3, 1, 5]));
