import svg4everybody from 'svg4everybody';
// import './lib/foundation-explicit-pieces';

svg4everybody();

document.querySelectorAll('.lang a').forEach(el => {
    el.addEventListener('click', e => {
        localStorage.setItem('lang', e.target.innerText.toLowerCase())
    })
})