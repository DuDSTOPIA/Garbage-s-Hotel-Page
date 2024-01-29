import { navegation_bar } from "./navBar.js"
import { footer } from "./footer.js"
import { reservation_bar } from "./reservation_bar.js"
import {wallpaperSlider} from "./slider.js";

// TODAS AS FUNÇÕES DA PAGINA ACCOMODATION ESTAO DIRETAMENTE LIGADAS A ESSE ARQUIVO

// GERA TODOS OS QUARTOS COM FEATURES NESCESSARIAS
function all_rooms(lista, id) {    
    
    lista.forEach(item => {
        const div = document.createElement('div')
        div.className = 'roomBox'
        let model = `<div class="room_div">
                        <div class="room_div_info">
                            <h1 class="room_div_title">${item.model}</h1>
                            <h3 class="room_div_text">${item.text}</h3>
                            <div class="room_div_img_div">
                                <img class="room_div_img" src="${item.img}" alt="">
                                <h2 class="room_div_price">De ${item.fromPriceSingle.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} por apenas ${item.toPriceSingle.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h2>
                            </div>
                        </div>
                        <div class="room_div_reservation" >
                            <div class="block01">
                                <h1 class="room_reservation_title">Quartos</h1>
                                <input class="acomodation_room_input" type="number" name="Quartos" id="acomodation_room_number" value="1" min="1" max="3">
                                <h1 class="room_reservation_title">Adultos</h1>
                                <input class="acomodation_room_adult_input" type="number" name="Adultos" id="acomodation_room_guests" value="1" min="1" max="${item.maxAdult}">
                                <h1 class="room_reservation_title">Crianças</h1>
                                <input class="acomodation_room_input" type="number" name="Quartos" id="acomodation_room_kids" value="0" min="0" max="${item.maxChildren}">
                                <button class="acomodation_room_button" type="submit">Reservar</button>
                            </div>
                        </div>
                    </div>`
            id.appendChild(div)
            div.innerHTML = model     
    })
    // getElementByClassName pega todas as ocorrencias de classes com o mesmo nome e coloca em um array
    let currentApartamentBox = document.getElementsByClassName('acomodation_room_adult_input');
    let currentApartamentValue = document.getElementsByClassName('room_div_price')
    
    // 
    function roomSelector(identifiedObj) {
        
        // Usa a lenght para saber total de apartamentos e gera um numero (posição) para cada um
        for(let x=0;x<identifiedObj.length;x++){
            // Atrela a escuta de evento para cada numero (posição) da lista
            identifiedObj[x].addEventListener('change', function() {
                // Roda a função rooms_value tendo a posição do item do Evento como paramentro
                rooms_value(identifiedObj[x])
            })
            function rooms_value(whatBox) {
                if(whatBox.value == 1) {
                    currentApartamentValue[x].innerHTML = `De ${lista[x].fromPriceSingle.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} por apenas ${lista[x].toPriceSingle.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
                }
                if(whatBox.value == 2) {
                    currentApartamentValue[x].innerHTML = `De ${lista[x].fromPriceDouble.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} por apenas ${lista[x].toPriceDouble.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
                }
                if(whatBox.value == 3) {
                    currentApartamentValue[x].innerHTML = `De ${lista[x].fromPriceTriple.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} por apenas ${lista[x].toPriceTriple.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
                }
                if(whatBox.value == 4) {
                    currentApartamentValue[x].innerHTML = `De ${lista[x].fromPriceQuadruple.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} por apenas ${lista[x].toPriceQuadruple.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
                }
            }
        }
            
    }

    roomSelector(currentApartamentBox)
    
}

// ARRAY CONTENDO TODOS OS QUARTOS
let roomsModels = [
    {model:'Express Duplo', text:'Modelo com 02 camas de solteiro, frigobar, tv e ar condicionado', img:'/img/twin-bed.jpg', fromPriceSingle: 200.00, toPriceSingle: 180.00, fromPriceDouble: 269.00, toPriceDouble: 249.00,  toPriceDouble: 249.00, maxAdult: 2, maxChildren: 2},
    {model:'Express Triplo', text:'Modelo com 03 camas de solteiro, frigobar, tv e ar condicionado', img:'/img/triplo.jpg', fromPriceSingle: 250.00, toPriceSingle: 210.00, fromPriceDouble: 269.00, toPriceDouble: 249.00, fromPriceTriple: 349.00, toPriceTriple: 329.00,  maxAdult: 3, maxChildren: 2},
    {model:'Luxo Casal', text:'Modelo com 01 cama de casal, frigobar, tv e ar condicionado', img:'/img/double-bed.jpg', fromPriceSingle: 249.00, toPriceSingle: 229.00, fromPriceDouble: 299.00, toPriceDouble: 279.00, maxAdult: 2, maxChildren: 2},
    {model:'Luxo Familia', text:'Modelo com 01 cama de casal, 01 cama de solteiro, frigobar, tv e ar condicionado', img:'/img/double_bed_and_single_bed.jpg', fromPriceSingle: 249.00, toPriceSingle: 229.00, fromPriceDouble: 299.00, toPriceDouble: 279.00, fromPriceTriple: 369.00, toPriceTriple: 349.00, maxAdult: 3, maxChildren: 2},
    {model:'Flat', text:'Modelo com 01 cama de casal, 02 cama de solteiro, mini-cozinha, sofá, tv e ar condicionado', img:'/img/flat.jpg', fromPriceSingle: 330.00, toPriceSingle: 310.00, fromPriceDouble: 410.00, toPriceDouble: 430.00, fromPriceTriple: 530.00, toPriceTriple: 510.00, fromPriceQuadruple: 600.00, toPriceQuadruple: 580.00, maxAdult: 4, maxChildren: 4},
    {model:'Master', text:'Modelo com 01 cama de casal, sofá, tv, ar condicionado e hidromassagem', img:'/img/master.jpg', fromPriceSingle: 400.00, toPriceSingle: 380.00, fromPriceDouble: 520.00, toPriceDouble: 500.00, maxAdult: 2, maxChildren: 2}   
]
const theRooms = document.getElementById('all_rooms')
//FUNÇÕES A SEREM EXECUTADAS
all_rooms(roomsModels, theRooms)
navegation_bar()
footer()
reservation_bar()

// GERA O CARROSSEL DA PAGINA
var box = document.querySelector('.carrer_form_employee');
let images = ['/img/img_slider/sala_reuniao01.jpg', '/img/img_slider/sala_reuniao02.jpg', '/img/img_slider/sala_reuniao03.jpg', '/img/img_slider/sala_reuniao04.jpg', '/img/img_slider/sala_reuniao05.jpg', '/img/img_slider/sala_reuniao06.jpg', '/img/img_slider/sala_reuniao07.jpg', '/img/img_slider/sala_reuniao08.jpg', '/img/img_slider/sala_reuniao09.jpg', '/img/img_slider/sala_reuniao10.jpg']
const slider = new wallpaperSlider(images, box)
