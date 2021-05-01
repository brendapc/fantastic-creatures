export default function dropdownMenu() {
    const dropdownMenus = document.querySelectorAll('[data-dropdown]')
    dropdownMenus.forEach(menu => {
        ['touchstart', 'click'].forEach(e =>{
            menu.addEventListener(e, handleClick)
        })
    })

    function handleClick(event){
        event.preventDefault()
        this.classList.toggle('active')
        console.log(this)
        outsideClick(this, ()=>{
            this.classList.remove('active')
        })
    }
    function outsideClick(element, callback) {
        const htmlElement = document.documentElement
        htmlElement.addEventListener('click', handleOutsideClick)
        function handleOutsideClick(event) {
            if(!element.contains(event.target)){
                callback()
                htmlElement.removeEventListener('click', handleOutsideClick)
            }
        }
    }
}