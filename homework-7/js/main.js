// =================== открытие модалки ====================================
const btn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')
const body = document.body

const openModal = () => {
    modal.classList.add('modal--open')
    body.classList.add('body--fixed')
}

const closeModal = () => {
    modal.classList.remove('modal--open')
    body.classList.remove('body--fixed')
}

btn.addEventListener('click', () => {
    openModal()
})

//===================== закрытие модалки ==================================
modal.addEventListener('click', event => {
    const target = event.target
    if (target && target.classList.contains('modal') || target.classList.contains('modol__close-btn')) {
        closeModal()    
    }
})

document.addEventListener('keydown', event =>{
    if(event.code === 'Escape') {
        closeModal()    
    }
})
