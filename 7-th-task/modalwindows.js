const btn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')
const btnClosed = document.querySelector('.modal__close-btn')

btn.addEventListener('click', ()=>{
    modal.classList.add('modal--open')
})

btnClosed.addEventListener('click',()=>{
    modal.classList.remove('modal--open')
})