const lists = document.querySelectorAll(".books"); //вывод списков
const books = document.querySelectorAll(".book"); //вывод книг одним списком элементов
const img = document.querySelector("body"); // картинка заднего фона
const titleBooks = document.querySelectorAll("h2"); //вывод заголовков книг в список элементов
const advRemove = document.querySelector(".adv"); // вывод класса о рекламе

const uls = document.querySelectorAll("ul"); //переменная для хранения списка содержаний
const lis = document.querySelectorAll("li"); //переменная для списка пунктов всех содержаний
const newElement = document.createElement("li");

// п.1 Восстанавливаю порядок книг
lists[0].prepend(books[1]);
lists[0].append(books[2]);
lists[0].append(books[3]);
lists[0].append(books[5]);
lists[0].append(books[2]);

// проверка какая книга
console.log(books[4]);

// п.2 меняю картинку заднего фона

img.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

// п. 3 исправляю заголовок 3-й книги
titleBooks[4].innerHTML =
  '<a href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes" target="_blank">Книга 3. this и Прототипы Объектов</a>';

// п. 4 удаление рекламы
advRemove.classList.remove("adv");
//п. 5 редактирование содержания 2-й книги
uls[0].insertBefore(lis[8], lis[4]);
uls[0].insertBefore(lis[6], lis[8]);
uls[0].insertBefore(lis[2], lis[10]);
// console.log(lis[10]);
// 8 = 3 kniga, 4=4kniga, 6=2kniga, 2=prilojenieC, 7=PrilojenieA, 5=kniga5, 3=kniga1,
// 1 = predislovie 0=vvedenie, 2=prilojenieC, 9=prilojenieB, 10=prilojenieD

//п. 5 редактирование содержания 5-й книги
uls[5].insertBefore(lis[55], lis[49]);
uls[5].insertBefore(lis[48], lis[52]);
uls[5].insertBefore(lis[51], lis[54]);
console.log(lis[56]); // делал перебор книг

/*  
Книга 5
Глава 3 = lis[50], ПриложениеА = lis[51], ГЛАВА 5 = lis[52]
Глава 2 = lis[49],  глава 4 = lis[48], предисловие = lis[47]
Введение = lis[46], глава 6 = lis[53],  приложениеБ = lis[54]
глава 1 = lis[55], приложениеС = lis[57]
*/

//п. 6 вставка новой главы в книгу 6
console.log(uls[2]); // определил 6 книгу по ид
newElement.textContent = "Глава 8: За пределами ES6";
uls[2].append(newElement);
uls[2].append(lis[26]);
console.log(lis[26]); // определил Приложение A: Благодарности! и поместил в конец
// books[3].replaceWith(books[4]);
// lists[0].append(books[3]);
// lists[0].append(books[5]);
// lists[0].append(books[2]);
// lists[0].prepend(books[3]);
// lists[0].prepend(books[1]);
// lists[0].append(books[4]);
// list[0].prepend(books[2]);
