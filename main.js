import {all_rooms} from "./js/accomodation.js"
import { wallpaperSlider } from "./js/slider.js"

/* this lines, make all the implementation of main tag = accomodation page */
const allrooms = new all_rooms()


const box = document.querySelector('.wallpaper_slider');

let images = ['/img/img_slider/sala_reuniao01.jpg', '/img/img_slider/sala_reuniao02.jpg', '/img/img_slider/sala_reuniao03.jpg', '/img/img_slider/sala_reuniao04.jpg', '/img/img_slider/sala_reuniao05.jpg', '/img/img_slider/sala_reuniao06.jpg', '/img/img_slider/sala_reuniao07.jpg', '/img/img_slider/sala_reuniao08.jpg', '/img/img_slider/sala_reuniao09.jpg', '/img/img_slider/sala_reuniao10.jpg']
const slider = new wallpaperSlider(images, box)