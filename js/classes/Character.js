"use strict";
let DUREE_ANIMATION = 4; // animation du sprite
let DURATION_MOVE = 16; // 16 pour pouvoir décaller de 2 le déplacement(32/16) : à l'arrache.com :)

function Character(position_canvas_x, position_canvas_y,
                   position_y_sprite_down, position_y_sprite_left, position_y_sprite_right, position_y_sprite_up,
                   position_x_sprite) {
    this.position_canvas_x = position_canvas_x;
    this.position_canvas_y = position_canvas_y;
    this.direction_sprite = {
        position_y_sprite_down,
        position_y_sprite_left,
        position_y_sprite_right,
        position_y_sprite_up
    };
    this.direction_canvas = "";
    this.etatAnimation = -1;
    // première position du character
    this.y_position_sprite = position_y_sprite_left;
    this.position_x_sprite = position_x_sprite;

    this.image_sprite = new Image();
    this.image_sprite.src = "./assets/rabbit.png";
}

Character.prototype.draw_character = function () {
    let frame = 0;
    console.log('position_canvas_x au debut', this.position_canvas_x);
    if (this.etatAnimation > DURATION_MOVE) {
        this.etatAnimation = -1;
    } else
        if(this.etatAnimation >= 0) {
            frame = Math.floor(this.etatAnimation / DUREE_ANIMATION);
            if(frame > 2) {
                //frame %= 3;
                frame = 0;
            }
            if(this.direction_canvas === "left") {
                this.position_canvas_x -= 32/DURATION_MOVE;

            } else if(this.direction_canvas === "right") {
                this.position_canvas_x += 32/DURATION_MOVE;
            } else if(this.direction_canvas === "up") {
                this.position_canvas_y -= 32/DURATION_MOVE;
            } else if(this.direction_canvas === "down") {
                this.position_canvas_y += 32/DURATION_MOVE;
            }

            this.etatAnimation++;
        }
    ctx.drawImage(this.image_sprite,                                // voir this.position_x_sprite(32*frame)
                    //32*frame, this.y_position_sprite * 32, 32, 32, // a voir car commencer a 32 probleme a venir
                  this.position_x_sprite+(32*frame), this.y_position_sprite * 32, 32, 32,
                  this.position_canvas_x, this.position_canvas_y, 32, 32);
                  console.log('position_canvas_x afin de draxImage', this.position_canvas_x);
                  console.log('position_canvas_y afin de draxImage', this.position_canvas_y);
};

Character.prototype.move_character = function (direction) {

    if (this.etatAnimation >= 0) { // bloque si une animation est en cours (si on a appuyé sur une touche)
        return false; // stop la fonction
    }

    switch (direction) {
        case 37 :
            if (this.position_canvas_x !== 32){
                this.direction_canvas = "left";
                this.y_position_sprite = this.direction_sprite.position_y_sprite_left;
            // On commence l'animation
            this.etatAnimation = 1;
            }
            break;
        case 38 :
            if (this.position_canvas_y !== 32) {
                this.direction_canvas = "up";
                this.y_position_sprite = this.direction_sprite.position_y_sprite_up;
                // On commence l'animation
                this.etatAnimation = 1;
            }
            break;
        case 39 :
            if (this.position_canvas_x !== 320) {
                this.direction_canvas = "right";
                this.y_position_sprite = this.direction_sprite.position_y_sprite_right;
                // On commence l'animation
                this.etatAnimation = 1;
            }
            break;
        case 40 :
            if (this.position_canvas_y !== 320) {
                this.direction_canvas = "down";
                this.y_position_sprite = this.direction_sprite.position_y_sprite_down;
                // On commence l'animation
                this.etatAnimation = 1;
            }
            break;
    }
};