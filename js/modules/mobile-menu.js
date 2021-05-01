export default function initMenuMobile() {
    
}
const menuButton = document.querySelector('[data-menu="button"]')
const menuList = document.querySelector('[data-menu="list"]')

function openMenu(event) {
    menuList.classList.toggle('active')
    menuButton.classList.toggle('active')
}

menuButton.addEventListener('click', openMenu)