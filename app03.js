// 3. Работа с атрибутами элементов
// получить родительский элемент
const d = document.querySelector('div')
console.log(d.parentNode) //body  -- поверне будь-який батьківський вузол (Node)
console.log(d.parentElement)  //body  -- поверне тільки батьківський HTML-елемент (Element)
// Якщо батько не є HTML-елементом, то поверне null.

// находим ссылку в d
const a = d.querySelector('.link')
console.log(a.closest('.content')) //div

// parentElement - вернет прямого родителя
// closest('.content') - вернет ближайшего родителя с таким селектором

// РАБОТА С АТРИБУТАМИ

console.log(d.classList) //DOMTokenList ['content', value: 'content'] - класы элемента

//добавить классы 
d.classList.add('article', 'custom')
console.log(d.classList) //DOMTokenList(3) ['content', 'article', 'custom', value: 'content article custom']

// удалить классы
d.classList.remove('article')
console.log(d.classList)  //DOMTokenList(2) ['content', 'custom', value: 'content custom']

// проверить наличие класса
console.log(d.classList.contains('custom')) //true - такой класс есть у элемента

// если нету - добавит, если есть - удалит 
console.log(d.classList.toggle('onka')) //true - не было такого класса, добавило и уже класс есть

// получить строку со всеми класами
console.log(d.className) //content custom onka

//атрибуты элементов
console.log(a.href) //получаем адрес ссылки

// установить атрибут и его значение
d.setAttribute('id', 'myID') // 1арг - атрибут, 2 - значение атрибута  
// setAttribute --- необязательно использовать, можем по точке d.id получить и перезаписать

// получить значение атрибута 
console.log(d.getAttribute('id')) //myID

// проверить или имеется такой атрибут
console.log(d.hasAttribute('id'))   //true --- да, такой атрибут есть у элемента

// удалять атрибут
console.log(d.removeAttribute('id'))    //undefined - ничего не возвращает, просто удаляет атрибут

// в html5 можно создавать свои атрибуты с приставкой data- и дописывать сто то, а потом работать с этим атрибутом
// получение значений data-
console.log(d.dataset) //DOMStringMap {myatr: 'myatr cust'} - обьект в котором есть ключ - как после data-...+ знач
console.log(d.dataset.myatr)    //myatr cust
console.log(d.getAttribute('data-myatr')) //myatr cust -- можем и так получать
