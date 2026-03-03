// 1. Введение в DOM
// получение элемента
const div = document.querySelector('div'); //первый подходящий элемент
console.log(div);
// console.dir(div);   //dir ---- посмотреть как обьект

const titles = document.querySelectorAll('h1')
console.log(titles) // NodeList(2) [h1, h1] - список подходящих элементов

// NodeList - имеет forEach, но не имеет map  -- поэтому нужно преобразовывать в массив
console.log(Array.from(titles)) //[h1, h1] - получаем масив
// 2 способ
console.log([...titles])    //[h1, h1]

// NodeList - это снимок нод-узлов, это не живая коллекция (при изменении ДОМа не поменяется)

// 2 способ получения списка элементов
const titles2 = document.getElementsByTagName('h1')
console.log(titles2) //HTMLCollection(2) [h1, h1] - живая колллекция, изменится, если изменить ДОМ

// Все элементы имеют свойства
console.log(div.nextSibling) //#text -- "\n    " -- перевод строки это тоже текст
console.log(div.nextElementSibling) //<script src="app01.js"></script>  -- следующий тэг
console.log(div.firstChild) //Lorem ipsum  -- первый текстовый узел
console.log(div.firstElementChild) //<a href="" class="link">dolor</a>  -- следующий тэг

console.log(document.body.firstChild.nextSibling) //<!-- коментарий 1 --> получили коментарий!!!
// document.links - все ссылки на страничке - HTMLCollection
// document.forms - все формы на страничке - HTMLCollection

// BOM - глобальные переменные ???
// window
// navigator
// location
// .... что еще???


