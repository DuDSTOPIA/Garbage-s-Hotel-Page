
/* here is all the implementation abou t rooms reservation*/
export function all_rooms() {
    let roomsModels = [
        {model:'Express Duplo', text:'Modelo com 02 camas de solteiro, frigobar, tv e ar condicionado', img:'/img/twin-bed.jpg', fromPrice: 269.99, toPrice: 249.99, maxAdult: 2, maxChildren: 2},
        {model:'Express Triplo', text:'Modelo com 03 camas de solteiro, frigobar, tv e ar condicionado', img:'/img/triplo.jpg', fromPrice: 329.99, toPrice: 279.99, maxAdult: 3, maxChildren: 2},
        {model:'Luxo Casal', text:'Modelo com 01 cama de casal, frigobar, tv e ar condicionado', img:'/img/double-bed.jpg', fromPrice: 349.99, toPrice: 299.99, maxAdult: 2, maxChildren: 2},
        {model:'Luxo Familia', text:'Modelo com 01 cama de casal, 01 cama de solteiro, frigobar, tv e ar condicionado', img:'/img/double_bed_and_single_bed.jpg', fromPrice: 399.99, toPrice: 359.99, maxAdult: 3, maxChildren: 2},
        {model:'Flat', text:'Modelo com 01 cama de casal, 02 cama de solteiro, mini-cozinha, sofá, tv e ar condicionado', img:'/img/flat.jpg', fromPrice: 499.00, toPrice: 449.00, maxAdult: 4, maxChildren: 4},
        {model:'Master', text:'Modelo com 01 cama de casal, sofá, tv, ar condicionado e hidromassagem', img:'/img/master.jpg', fromPrice: 499.00, toPrice: 449.00, maxAdult: 2, maxChildren: 2}   
    ]
    let all_rooms = document.querySelector('.all_rooms')
    roomsModels.forEach(item => {
        let div = document.createElement('div');
        let model = `
        <div class="room_div">
                            <div class="room_div_info">
                                <h1 class="room_div_title">${item.model}</h1>
                                <h3 class="room_div_text">${item.text}</h3>
                                <div class="room_div_img_div">
                                    <img class="room_div_img" src="${item.img}" alt="">
                                    <h2 class="room_div_price">De ${item.fromPrice} por ${item.toPrice} Diaria</h2>
                                </div>
                            </div>
                            <div class="room_div_reservation" >
                                <div class="block01">
                                    <h1 class="room_reservation_title">Quartos</h1>
                                    <input class="acomodation_room_input" type="number" name="Quartos" id="acomodation_room_number" value="1" min="1" max="3">
                                    <h1 class="room_reservation_title">Adultos</h1>
                                    <input class="acomodation_room_input" type="number" name="Quartos" id="acomodation_room_guests" value="1" min="1" max="${item.maxAdult}">
                                    <h1 class="room_reservation_title">Crianças</h1>
                                    <input class="acomodation_room_input" type="number" name="Quartos" id="acomodation_room_kids" value="0" min="0" max="${item.maxChildren}">
                                    <button class="acomodation_room_button" type="submit">Reservar</button>
                                </div
                            </div>
                        </div>`
        all_rooms.appendChild(div);
        div.innerHTML = model;
    })
}

