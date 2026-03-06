
const title = document.querySelector('h1')
//title.innerHTML = '<span>text01</span>';    //можно записывать тэги
//title.innerText = 'new text'           // нельзя записывать тэги, все тэги запишутся как текст
// title.appendChild('<span>wwwwww</span>') // ошибка параметр должен быть типа Node ???
//title.insertAdjacentHTML('beforebegin', '<h2>title h2</h2>') //КУДА вставить относительно title. и что вставить

// почему innerHTML стремный
title.innerHTML += ' <span>addd span</span>'
const span = title.querySelector('span')
console.log(span) //<span>addd span</span>  --- span.textContent ниже изменил тут вывод
title.innerHTML += ' <span>new text2</span>'
span.textContent = 'zzzzz' //але на странице ничего не поменялось
// innerHTML --- уничтожает все внутренние элементы и их изменение ни к чему не приводит

// создание элемента - 
const span2 = document.createElement('span')    //он никуда не добавился, он только в js
span2.textContent = 'spanchik'
span2.classList.add('myclass')
console.log(span2)
title.appendChild(span2)    //сначала добавится в заголовок
const d = document.querySelector('div')
d.appendChild(span2)    //уберется с заголовка и добавится в div

// при создании большого количество элементов, сначала создаем их, потом помещаем в фрагмент, 
// потом вставляем в разметку, что бы меньше перерисовывать страничку!!!

const fragment = document.createDocumentFragment()  //создаем фрагмент пустой
const colors = ['black', 'yellow', 'orange']
colors.forEach((color) => {
    const item = document.createElement("div")
    item.classList.add(`bg-${color}`)
    item.style.background = color           //поменяли цвет фона
    item.textContent = color
    fragment.appendChild(item)
})
document.body.appendChild(fragment)

// удаление элементов из страницы
//title.remove()  //элемент удален - не поддерж в Е11
title.parentElement.removeChild(title) //обращаемся к родителю и удаляем у него ребенка - указываем тот же элем
