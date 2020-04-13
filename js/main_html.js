"use_strict";

const btn_play = document.querySelector('#jouer');
const canvas_display = document.querySelector('.display_none');
const section1_display = document.querySelector('#section1');
console.log('section1 = ',section1_display);
//const btn_text = 'Stop !';

btn_play.addEventListener('click', btn_update);

function btn_update() {
    console.log('click !');
    //element.classList.remove("mystyle");
    if (btn_play.value === 'jouer') {
        btn_play.value = 'Stop';
        canvas_display.classList.remove('display_none');
        section1_display.classList.add('display_none');
    }
    else {
        btn_play.value = 'jouer';
        canvas_display.classList.add('display_none');
        section1_display.classList.remove('display_none');
    }
    //btn_play.value === 'jouer' ? btn_play.value = 'Stop' : btn_play.value = 'jouer';

}
