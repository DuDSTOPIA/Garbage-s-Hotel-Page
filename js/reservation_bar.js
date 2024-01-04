
export function reservation_bar() {
    const reservation = document.querySelector('.reservation')
    let reservationBar = `
                <nav class="reservation_bar">
                        <div class="reservation_div">
                            <h1 class="reservation_link">Check-in</h1>
                            <input class="reservation_calendar" type="date" name="chekin" id="chekin">
                        </div>
                        <div class="reservation_div">
                            <h1 class="reservation_link">Check-out</h1>
                            <input class="reservation_calendar" type="date" name="checkout" id="checkout">
                        </div>
                        <div class="reservation_div">
                            <h1 class="reservation_link">Adultos</h1>
                            <input class="reservation_number" type="number" name="adultos" id="adultos" value="1" min="1" max="3">
                        </div>
                        <div class="reservation_div">
                            <h1 class="reservation_link">Crianças</h1>
                            <input class="reservation_number" type="number" name="criancas" id="criancas" value="0" min="0" max="3">
                        </div>
                        <button class="reservation_button" type="submit">Reservar</button>
                    </nav>
    `
    reservation.innerHTML = reservationBar
}