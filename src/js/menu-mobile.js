const btnMobile = document.getElementById('btn-mobile');


function toggleMenu(event){
    if(event.type === 'touchstart') event.preventdefault();
    const nav = document.getElementById('navegacao')
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);