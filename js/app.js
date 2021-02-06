var button = document.getElementById('interruptor');
var main = document.querySelector('main');
var icon = document.querySelector('.far');
var estado = 0;
cambiarBg();
icon.addEventListener('click', () => {
    if (estado == 0) {
        estado = 1;
        localStorage.setItem('color', 'main_black');
        main.classList.replace("main", "main_black");
        icon.classList.replace('fa-moon', 'fa-sun')
        localStorage.setItem('icon', 'fa-sun')
        cambiarBg()

    } else {
        estado = 0;
        localStorage.setItem('color', 'main');
        main.classList.replace("main_black", "main");
        icon.classList.replace('fa-sun', 'fa-moon')
        localStorage.setItem('icon', 'fa-moon')
        cambiarBg;
    }

})

function cambiarBg() {
    if (estado == 0) {
        const bg = localStorage.getItem('color');
        main.classList.replace("main", bg);
        //Icon
        const icon_act = localStorage.getItem('icon');
        main.classList.replace("fa-sun", icon_act);
    } else {
        const bg = localStorage.getItem('color');
        main.classList.replace("main_black", bg);
        //Icon
        const icon_act = localStorage.getItem('icon');
        main.classList.replace("fa-sun", icon_act);
    }
}

//Menu

const bars = document.querySelector('.bars');
const menu = document.querySelector('.nav-main');
const icon_bar = document.getElementById('bar');
let menu_status = 0;
bars.addEventListener('click', () => {
    if (menu_status == 0) {
        menu.style.display = 'flex';
        icon_bar.classList.replace('fa-bars', 'fa-angle-down')
        menu_status = 1;
    } else {
        menu.style.display = 'none';
        icon_bar.classList.replace('fa-angle-down', 'fa-bars')
        menu_status = 0;
    }

})