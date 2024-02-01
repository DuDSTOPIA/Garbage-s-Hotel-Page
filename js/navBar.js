import { nav, a } from "./tag_creator.js"

export function navegation_bar() {
    const navegation_bar = document.querySelector('.navegation_bar')
    
    nav(navegation_bar, 'nav_bar', 'nav_bar')
        a('nav_bar', 'nav_button', '/index.html', 'Home')
        a('nav_bar', 'nav_button', '/about.html', 'Sobre')
        a('nav_bar', 'nav_button', '/accomodation.html', 'Acomodações')
        a('nav_bar', 'nav_button', '/login.html', 'Login')
        a('nav_bar', 'nav_button', '/career.html', 'Trabalhe Conosco')
}