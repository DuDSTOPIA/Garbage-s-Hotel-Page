import {navegation_bar} from "./navBar.js"
import {footer} from "./footer.js"

navegation_bar()
footer()

// BACKGROUND DA PAGINA
const login_background = ["/img/login_slider/hotel_img_bar.jpg", "/img/login_slider/hotel_img_breakfest.jpg", "/img/login_slider/hotel_img_fiancee.jpg", "/img/login_slider/hotel_img_garden.jpg", "/img/login_slider/hotel_img_relax.jpg", "/img/login_slider/hotel_img_room.jpg", "/img/login_slider/hotel_img_rose.jpg", "/img/login_slider/hotel_img_towel.jpg", "/img/login_slider/hotel_img_wine.jpg", ]

function imgBackground(lista) {
    let randomNumber = Math.floor(Math.random() * login_background.length)
    const login_page = document.getElementById("login_page");
    login_page.style.backgroundImage = `url('${lista[randomNumber]}')`
}

imgBackground(login_background)

// LOGIN E CADASTRE-SE

const loginModel = `
    <section class="tab_container_form_login">
        <h1 class="tab_container_form_login_title">Login</h1>
        <div class="tab_container_form_login_div">
            <h1 class="tab_container_form_login_text">Email: </h1>
            <input type="email" name="email" id="tab_container_form_login_email">
        </div>
        <div class="tab_container_form_login_div">
            <h1 class="tab_container_form_login_text">Senha: </h1>
            <input type="password" name="password" id="tab_container_form_login_password">
        </div>
        <button id="tab_container_form_button" type="submit">Entrar</button>
    </section>
`

const signupModel = `
    <section class="tab_container_form_signup">
        <h1 class="tab_container_form_login_title">Cadastre-se!</h1>
        <div class="tab_container_form_signup_div">
            <h1 class="tab_container_form_signup_text">Nome: </h1>
            <input type="text" name="text" id="tab_container_form_signup_name">
        </div>
        <div class="tab_container_form_signup_div">
            <h1 class="tab_container_form_signup_text">Data de nascimento: </h1>
            <input type="date" name="text" id="tab_container_form_signup_date">
        </div>
        <div class="tab_container_form_signup_div">
            <h1 class="tab_container_form_signup_text">Email: </h1>
            <input type="email" name="text" id="tab_container_form_signup_name">
        </div>
        <div class="tab_container_form_signup_div">
            <h1 class="tab_container_form_signup_text">Senha: </h1>
            <input type="email" name="text" id="tab_container_form_signup_name">
        </div>
        <div class="tab_container_form_signup_div">
            <h1 class="tab_container_form_signup_text">Confirme: </h1>
            <input type="email" name="text" id="tab_container_form_signup_name">
        </div>
        <button id="tab_container_form_button" type="submit">Cadastrar</button>
    </section>
`

const loginButton = document.querySelector('.tab_button_login')
const signupButton = document.querySelector('.tab_button_signup')
const tabContainer = document.querySelector('.tab_container_form')
tabContainer.innerHTML = loginModel

loginButton.addEventListener('click', function() {
    tabContainer.innerHTML = loginModel
})

signupButton.addEventListener('click', function() {
    tabContainer.innerHTML = signupModel
})





