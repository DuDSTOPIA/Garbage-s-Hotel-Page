import {all_rooms} from "./js/accomodation.js"
import {wallpaperSlider} from "./js/slider.js"
import {reservation_bar} from "./js/reservation_bar.js";

/* A função reservation_bar gera a barra de reserva em todas as paginas e esta localizada na pasta js*/
const reservation = new reservation_bar;

/* A função all_rooms gera os modelos de quartos da pagina Acomodações e esta localizada na pasta js*/
let price = new all_rooms()

/* A função wallpaperSlider cria o carrossel nas configuraçoes atuais */
const box = document.querySelector('.wallpaper_slider');
let images = ['/img/img_slider/sala_reuniao01.jpg', '/img/img_slider/sala_reuniao02.jpg', '/img/img_slider/sala_reuniao03.jpg', '/img/img_slider/sala_reuniao04.jpg', '/img/img_slider/sala_reuniao05.jpg', '/img/img_slider/sala_reuniao06.jpg', '/img/img_slider/sala_reuniao07.jpg', '/img/img_slider/sala_reuniao08.jpg', '/img/img_slider/sala_reuniao09.jpg', '/img/img_slider/sala_reuniao10.jpg']
const slider = new wallpaperSlider(images, box)

