import Phaser from 'phaser'

import pointFromPolar from './util.js'

var East = 0;
var South = 90;
var West = 180;
var North = 270;

export default class Clouds extends Phaser.Group {
    constructor(game) {
	super(game)
	var cloud = ['cloud1', 'cloud2']
	for(var i = 0; i < 6; i++){
	    this.create_sprite( game.rnd.angle(),
				game.rnd.pick(cloud),
				game.rnd.between(100, 200))

	}

	this.create_sprite(0, 'cloud1', 200)
	this.create_sprite(0, 'cloud1', 200)
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
	    + height
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
	this.angle -= 0.1
    }
}
