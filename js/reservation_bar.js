import { modal } from "./modal.js"
import {nav, div, h1, input, button} from "./tag_creator.js"

export function reservation_bar() {
    const reservation = document.querySelector('.reservation')
    if(reservation) {

        nav(reservation, 'reservation_bar')
            div('reservation_bar', 'reservation_div')
                h1('reservation_div', 'reservation_link', 'Check-in')
                input('reservation_div', 'reservation_calendar', 'chekin', 'date', false, false, false)
            div('reservation_bar', 'reservation_div1')
                h1('reservation_div1', 'reservation_link', 'Checkout')
                input('reservation_div1', 'reservation_calendar', 'checkout', 'date')
            div('reservation_bar', 'reservation_div2')
                h1('reservation_div2', 'reservation_link', 'Adultos')
                input('reservation_div2', 'reservation_number', 'adultos', 'number', 1, 1, 2)
            div('reservation_bar', 'reservation_div3')
                h1('reservation_div3', 'reservation_link', 'Crianças')
                input('reservation_div3', 'reservation_number', 'criancas', 'number', 0, 0, 2)
            button('reservation_bar', 'reservation_button', 'Reservar', 'reservation_button', 'submit')
            
        } else {
            return
        }

        const reservar = document.getElementById('reservation_button')
        reservar.onclick = function() {
            alert('O sistema de Reservas ainda nao está pronto, volte outra hora. :D')
        }
}


