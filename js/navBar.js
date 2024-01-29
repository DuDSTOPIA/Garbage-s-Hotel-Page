
export function navegation_bar() {
    const navegation_bar = document.querySelector('.navegation_bar')
    let navegationBar = `
            <section class="nav_bar">
                <a class="nav_button" href="/index.html">Home</a>
                <a class="nav_button" href="/about.html">Sobre nós</a>
                <a class="nav_button" href="/accomodation.html">Acomodações</a>
                <a class="nav_button" href="/login.html">Login</a>
                <a class="nav_button" href="/career.html">Trabalhe Conosco</a>
            </section>
    `
    navegation_bar.innerHTML = navegationBar
}