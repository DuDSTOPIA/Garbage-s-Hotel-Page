
export function modal() {
    const switchModal = () => {
        const modalClass = document.querySelector('.modal_window');
        var actualStyle = modalClass.style.display;
        if(actualStyle = 'block') {
            modalClass.style.display = 'none'
        }else {
            modalClass.style.display = 'block'
        }
    }
    
    const btn = document.querySelector('.reservation_button');
    btn.addEventListener('click', switchModal)

    window.onclick = function(event) {
        const modalClass = document.querySelector('.modal_window');
        if(event.target == modalClass) {
            switchModal()
        }
    }


}