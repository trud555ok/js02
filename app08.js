//Обработка событий
const bt = document.querySelector('button')     
// bt.onclick = function(){                        //недостаток такого метода - нельзя повесить много обработчиков
//     console.log('click')            // будет выполняться последний обработчик
// }

bt.addEventListener('click', function(){
    console.log('myClick')
})
// 1 арг - событие (без on)
// 2 арг - функция которая отработает
// 3 арг - ???

// можно вешать сколько хочешь обработчиков
bt.addEventListener('click', function(e){
    console.log(e)      // PointerEvent обєкт, цікаве - (target:button, type: "click")
})

bt.addEventListener('click', (e) => {
    console.log(this)       //Window - стрелочная функция
})

// отмена дефолтного поведения - отмена выполнения определенных функций
const ln = document.querySelector('a')

function clickhandler(e){
    e.preventDefault(); //отмена стандартных действий,ссылка перестанет перезагружать страницу - а если есть ссылка???
    console.log(this)      //<a href="">Click link</a>   -- нестрелочная функция укажет на сам элемент
    console.log('click')
}

// назначить обработчик событий
ln.addEventListener('click', clickhandler)

// удалить обработчик событий
// ln.removeEventListener('click',clickhandler)  //clickhandler - обработчик событий

const btnZ = document.querySelector('.zzz')
const ct = document.querySelector('.container')
btnZ.addEventListener('click', function(e){
    const ch = document.createElement('div')
    const nestBn = document.createElement('button')
    nestBn.textContent = 'Нажимай'
    ch.textContent = Math.random()
    ch.appendChild(nestBn)
    ct.appendChild(ch)
})
// вешаем обработчик на весь блок а не на отдельную кнопку
ct.addEventListener('click', (e) => {
    
    if (e.target.tagName === "BUTTON"){                 //если кликнули на кнопку а не на число которое тоже в блоке
            console.dir(e.target)
    }
})