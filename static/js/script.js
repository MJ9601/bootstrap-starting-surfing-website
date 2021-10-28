let buttonPics = document.querySelectorAll('.button-section-picture');
let iframTage = document.querySelector('#iframeTage');

buttonPics.forEach(element =>{
    element.addEventListener('click', () =>{
        let iframeSrc = element.getAttribute('data-iframe-src');
        iframTage.src = iframeSrc;

    })
})