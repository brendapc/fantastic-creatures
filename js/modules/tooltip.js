export default function initTooltip(){
    const tooltips = document.querySelectorAll('[data-tooltip]')

    tooltips.forEach((tooltip)=>{
        tooltip.addEventListener('mouseover', onMouseOver)
    })

    function onMouseOver(event) {
        const tooltipBox = createTooltip(this)
        tooltipBox.style.top = event.pageY + 'px'
        tooltipBox.style.left = event.pageX + 'px' //pageY e X do mouse

        this.addEventListener('mouseleave', onMouseLeave)
        onMouseLeave.tooltipBox = tooltipBox
        onMouseLeave.element = this

        this.addEventListener('mousemove', onMouseMove)
        onMouseMove.tooltipBox = tooltipBox

    }
    const onMouseLeave = {
        handleEvent(){ //tem que ser esse nome
            this.tooltipBox.remove()
            this.element.removeEventListener('mouseleave', onMouseLeave)
            this.element.removeEventListener('mousemove', onMouseMove)
        }
    }
    const onMouseMove = {
        handleEvent(event){
            this.tooltipBox.style.top = event.pageY + 20 + 'px'
            this.tooltipBox.style.left = event.pageX + 20 + 'px'
        }
    }

    function createTooltip(element) {
        const tooltipBox = document.createElement('div')
        const text = element.getAttribute('aria-label')
        tooltipBox.classList.add('tooltip')
        tooltipBox.innerHTML = text
        document.body.appendChild(tooltipBox)
        return tooltipBox
    }
}