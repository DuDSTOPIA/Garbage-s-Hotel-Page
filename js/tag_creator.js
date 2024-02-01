

export function nav(fatherTag, classs) {
    
    const nav = document.createElement('nav');
    nav.className = classs;
    fatherTag.appendChild(nav)
}

export function section(fatherTag, classs, id) {
    const tag = document.querySelector(`.${fatherTag}`);

    const section = document.createElement('section');
    section.className = classs
    section.id = id
    tag.appendChild(section)

}

export function a(fatherTag, classs, href, text) {
    const tag = document.querySelector(`.${fatherTag}`);

    const a = document.createElement('a')
    a.className = classs
    a.href = href
    a.innerText = text
    tag.appendChild(a)
}

export function div(fatherTag, classs) {
    const tag = document.querySelector(`.${fatherTag}`);
    const div = document.createElement('div');
    div.className = classs;
    tag.appendChild(div)
}

export function h1(fatherTag, classs, text) {
    const tag = document.querySelector(`.${fatherTag}`);
    const h1 = document.createElement('h1');
    h1.className = classs
    h1.innerText = text
    tag.appendChild(h1)
}

export function input(fatherTag, classs, id, type, value, min, max) {
    const tag = document.querySelector(`.${fatherTag}`);
    
    const input = document.createElement('input')
    input.className = classs
    input.id = id
    input.setAttribute('type', type)
    input.setAttribute('value', value)
    input.setAttribute('min', min)
    input.setAttribute('max',max)
    tag.appendChild(input)
}

export function button(fatherTag, classs, text, id, type) {
    const tag = document.querySelector(`.${fatherTag}`);
    const button = document.createElement('button');
    button.className = classs
    button.id = id
    button.type = type
    button.innerText = text
    tag.appendChild(button)

}