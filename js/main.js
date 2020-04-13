"use strict";

const map           = new Map();
const my_sprite     = new Image();
      my_sprite.src = './assets/tiles.png';
const my_carrot     = new Image();
      my_carrot.src = './assets/carrot.png';

const cat           = new Character(32,// position_canvas_x,
                                    64,// position_canvas_y,
                                    0,//  position_y_sprite_down,
                                    1,//  position_y_sprite_left,
                                    2,//  position_y_sprite_right,
                                    3,//  position_y_sprite_up,
                                    0);// position_x_sprite

const canvas = document.getElementById('canvas');
const ctx   = canvas.getContext('2d');

window.onload = function () {
    setInterval(function () {
        map.draw_map(map.tiles_first_layer);
        map.draw_map(map.tiles_second_layer);
        cat.draw_character();
        map.drawn_object_on_map(my_carrot,256, 64);
        map.drawn_object_on_map(my_carrot,64, 256);
    },40);
};
window.onkeydown = function (event) {
    const key_press = event.keyCode;

    switch (key_press) {
        case 38 :
            //console.log('up');
            cat.move_character(38);
            break;
        case 40 :
            //console.log('down');
            cat.move_character(40);
            break;
        case 39 :
            //console.log('right');
            cat.move_character(39);
            break;
        case 37 :
            //console.log('left');
            cat.move_character(37);
            break;
    }
};