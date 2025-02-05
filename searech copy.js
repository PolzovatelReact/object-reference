//Объект
const programmingLanguages = [
  {
    name: "JavaScript",
    history:
      "Создан в 1995 году Бренданом Эйхом в компании Netscape, стал стандартом для веб-разработки.",
  },
  {
    name: "Python",
    history:
      "Разработан Гвидо ван Россумом в 1991 году, известен своей простотой и читаемостью кода.",
  },
  {
    name: "Java",
    history:
      "Создан в 1995 году компанией Sun Microsystems, используется в корпоративных приложениях и Android.",
  },
  {
    name: "C",
    history:
      "Разработан Деннисом Ритчи в 1972 году в Bell Labs, стал основой для многих других языков.",
  },
  {
    name: "C++",
    history:
      "Создан Бьярне Страуструпом в 1983 году как расширение C, поддерживает объектно-ориентированное программирование.",
  },
  {
    name: "C#",
    history:
      "Разработан Microsoft в 2000 году для платформы .NET, используется в разработке приложений и игр.",
  },
  {
    name: "Ruby",
    history:
      "Создан Юкихиро Мацумото в 1995 году, известен своей элегантностью и популярностью в веб-разработке (Ruby on Rails).",
  },
  {
    name: "Swift",
    history:
      "Разработан Apple в 2014 году для iOS и macOS, заменил Objective-C.",
  },
  {
    name: "PHP",
    history:
      "Создан Расмусом Лердорфом в 1995 году, широко используется для веб-разработки.",
  },
  {
    name: "Go",
    history:
      "Разработан Google в 2009 году для высокой производительности и многопоточного программирования.",
  },
  {
    name: "Rust",
    history:
      "Создан Mozilla в 2010 году, фокусируется на безопасности и скорости.",
  },
  {
    name: "Kotlin",
    history:
      "Разработан JetBrains в 2011 году, стал официальным языком для разработки Android.",
  },
  {
    name: "TypeScript",
    history:
      "Разработан Microsoft в 2012 году как надстройка над JavaScript, добавляющая статическую типизацию.",
  },
  {
    name: "SQL",
    history:
      "Создан в 1970-х годах Дональдом Чамберлином и Рэем Бойсом для работы с базами данных.",
  },
  {
    name: "Perl",
    history:
      "Создан Ларри Уоллом в 1987 году, использовался для работы с текстами и веб-разработки.",
  },
  {
    name: "R",
    history:
      "Разработан в 1993 году Россом Ихакой и Робертом Джентльменом для статистики и анализа данных.",
  },
  {
    name: "Lua",
    history:
      "Создан в 1993 году в Бразилии, используется в играх и встраиваемых системах.",
  },
  {
    name: "Dart",
    history:
      "Разработан Google в 2011 году, активно используется в Flutter для кроссплатформенной разработки.",
  },
  {
    name: "Scala",
    history:
      "Создан в 2004 году Мартином Одерски, сочетает ООП и функциональное программирование.",
  },
  {
    name: "Haskell",
    history:
      "Разработан в 1990 году как чисто функциональный язык программирования.",
  },
];

let search = function () {
  let inputSearch = document
    .getElementById("input-search") // Обращение к id
    .value // Текущее значение для ввода input
    // .trim() // Удаляяет пробелы
    .replace(/\s+/g, "") // Удаляем пробелы
    .toLowerCase(); // Преобразует в нижний регистр
  let resultSearch = document.getElementById("result-search"); // Результат получаем <div id="result-search"></div>

  let result = programmingLanguages.filter(
    // filter для фильтрации массива
    (lang) => lang.name.toLowerCase() === inputSearch
  ); // Обращаемся к объекту programmingLanguages

  if (result.length > 0) {
    resultSearch.innerHTML = `${result[0].name}<br>${result[0].history}`; // innerHTML используем для
    localStorage.setItem("lastSearch", inputSearch); //Сохраняем последний запрос
  } else {
    resultSearch.textContent = "Таких языков программирования нет"; // Отрицательный результат
    localStorage.setItem("lastSearch", ""); //
  }
};

window.onload = function () {
  let lastSearch = localStorage.getItem("lastSearch");
  if (lastSearch) {
    document.getElementById("input-search").value = lastSearch;
    search(); // Выполняем поиск с последнего сохраненного значения
  }
};

document.getElementById("search-button").addEventListener("click", search); // Нажать на кнопку  Узнать search-button

//Выводим все названия из programmingLanguages
const names = programmingLanguages // Обращение к массиву
  .map((lang) => `<li>${lang.name}</li>`) // Метод map, выводим названия
  .join("");

// Выведем все имена в элемент header, соединив их через запятую
document.querySelector(
  "#result-search"
).innerHTML = `Узнать историю языков программирования: <ul> ${names}</ul>`; // Выводим все названия  result-search

// let search = function () {
//   let inputSearch = document
//     .getElementById("input-search")
//     .value.trim()
//     .replace(/\s+/g, "")
//     .toLowerCase();
//   let resultSearch = document.getElementById("result-search");

//   let result = programmingLanguages.filter(
//     (lang) => lang.name.toLowerCase() === inputSearch
//   );

//   if (result) {
//     resultSearch.textContent = `${result.name} <br> ${result.history}`;
//   } else {
//     resultSearch.textContent = "Таких языков программирования нет";
//   }
// };

// document.getElementById("search-button").addEventListener("click", search);

// function search() {
//   let inputSearch = document
//     .getElementById("input-search")
//     .value.trim()
//     .replace(/\s+/g, "")
//     .toLowerCase();
//   let resultSearch = document.getElementById("result-search");

//   let result = programmingLanguages.find(
//     (lang) => lang.name.toLowerCase() === inputSearch
//   );

//   if (result) {
//     resultSearch.textContent = `${result.name} <br> ${result.history}`;
//   } else {
//     resultSearch.textContent = "Таких языков программирования нет";
//   }
// }
// function search() {
//   let inputSearch = document
//     .getElementById("input-search")
//     .value.trim()
//     .toLowerCase();
//   let resultSearch = document.getElementById("result-search");
//   switch (inputSearch) {
//     case "java script":
//     case "javascript":
//       resultSearch.textContent = "Вы ввели правильно";
//       let result = programmingLanguages.find(
//         (lang) => lang.name.toLowerCase() === "javascript"
//       );
//       resultSearch.textContent = `${result.name} <br> ${result.history}`;
//       break;
//     default:
//       resultSearch.textContent = "Таких языков программирования нет";
//   }
// }
