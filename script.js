const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () =>{
    search.classList.toggle('active')
    // 點擊時觸發active的切換
    input.focus()
    // 同時將讓輸入區顯示打字游標
})