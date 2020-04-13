"use strict";

function Map() {
    this.cols = 12;
    this.rows = 12;
    this.size_tile_origin =  64;
    this.size_tile_canvas = 32;
    this.tiles_first_layer = [
            [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
    this.tiles_second_layer = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
    ];
}
/**
 * draw Image on canvas
 * @param { [] } tile
 * @return { void }
 */
Map.prototype.draw_map = function (tile) {
    for (let c = 0; c < this.cols; c++) {
        for (let r = 0; r < this.rows; r++) {
            if (tile[c][r] !== 0) { // 0 => empty tile
                ctx.drawImage(my_sprite,
                    (tile[c][r]-1)*this.size_tile_origin,// source x
                    0, // source y
                    this.size_tile_origin,// source width. Ici this fait référence a l'intance map (map.size_tile_origin)
                    this.size_tile_origin, // source height
                    r * (map.size_tile_canvas),
                    c * (map.size_tile_canvas),
                    this.size_tile_canvas,
                    this.size_tile_canvas
                );
            }
        }
    }
};
/**
 * draw Image on canvas
 * @param { [] } tile
 * @return { void }
 */

/*this.draw_map = function(tile) {
        for (let c = 0; c < this.cols; c++) {
            for (let r = 0; r < this.rows; r++) {
                if (tile[c][r] !== 0) { // 0 => empty tile
                    ctx.drawImage(my_sprite,
                        (tile[c][r]-1)*this.size_tile_origin,// source x
                        0, // source y
                        this.size_tile_origin,// source width. Ici this fait référence a l'intance map (map.size_tile_origin)
                        this.size_tile_origin, // source height
                        r * (map.size_tile_canvas),
                        c * (map.size_tile_canvas),
                        this.size_tile_canvas,
                        this.size_tile_canvas
                    );
                }
            }
        }
    }*/

