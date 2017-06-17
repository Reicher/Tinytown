import Phaser from 'phaser'

import pointFromPolar from './util.js'

var East = 0;
var South = 90;
var West = 180;
var North = 270;

export default class Foreground extends Phaser.Group {
    constructor(game) {
	super(game)
	this.x = 250
	this.y = 500
	this.create_sprite( North + 40, 'tree2')
	this.create_sprite( North + 35, 'bush')

	this.create_sprite( West + 40, 'tree2')
	this.create_sprite( West + 25, 'bush')
	this.create_sprite( West  -14, 'tree1')

	this.create_sprite( East + 35, 'tree2')
	this.create_sprite( East  - 15, 'tree3')
    }

    create_sprite(angle, key, height = 0){
	return this.place_sprite(angle,
				 this.create(0, 0, key),
				 height)
    }

    place_sprite(angle, sprite, height = 0){
	sprite.anchor.setTo(0.5)
	var true_height =
	    250
	    + height - this.game.rnd.between(5, 30)
	    + sprite.height/2
	    - sprite.width/16

	sprite.position = pointFromPolar(true_height,
					 angle,
					 true)
	sprite.angle = angle+90
	return sprite
    }

    update()
    {
    }
}
