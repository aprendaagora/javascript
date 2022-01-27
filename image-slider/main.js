document.addEventListener('DOMContentLoaded', () => {

    const container = document.getElementById('container');

    const camadaCima = container.querySelector('.cima');

    const handle = container.querySelector('.handle');

    let skew = 0;

    // Localização horizontal do mouse
    let delta = 0;

    if(container.className.indexOf('skew') != -1) {
        skew = 1000;
    }
    
    container.addEventListener('mousemove', (evento) => {
        delta = (evento.clientX - window.innerWidth/2) * 0.5;
    
        handle.style.left = evento.clientX + delta + 'px';

        camadaCima.style.width = evento.clientX + skew + delta + 'px'
    
    })
});

