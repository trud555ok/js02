//  Всплытие и погружение события
// Всплытие - когда событие висит на вложеном элементе и на его родителе
const btn = document.querySelector('.btn')
const block = document.querySelector('.wrap')

btn.addEventListener("click", (e) => {
    //e.stopPropagation()     //это событие сработает, а на родителе не сработает!!!
    console.log('click btn')
})

// тут отработает всплытие от ребенка к самому старому  -- без e.stopPropagation() у ребенка
block.addEventListener("click", (e) => {
    console.log('click block')
})         

document.body.addEventListener('click', e => {
    console.log('click body')
})            


// тут отработает погружение - от самого старого к ребенку
block.addEventListener("click", (e) => {
    console.log('click block')
}, {capture: true})         //3 пар - {capture: true} - отслеживать погружение

document.body.addEventListener('click', e => {
    console.log('click body')
}, true)            //3 пар - true - отслеживать погружение

// всплытие - при нажатии на кнопку сработает и его событие и событие родителя
// когда 3 пар - true - включено отслеживание погружения, то даже при  e.stopPropagation() у ребенка
// у родителя тоже будет срабатывать общее событие
// обработчик без 3 пар - реагирует на всплытие
// обработчик с 3 пар true  - реагирует на погружение

// погружение - событие сначала сработает на старшем родителе и погрузится до ребенка
// всплытие - от ребенка к самому старшему родителю

// как бы не расположены были обработчики - сначала сработает погружение !!!! (с 3 параметром)