import Phaser from 'phaser'

import Lights from './lights'
import pointFromPolar from './util.js'

var East = 0;
var South = 90;
var West = 180;
var North = 270;

export default class Celestials extends Phaser.Group {
    constructor(game, sleep_event) {
	super(game)
	this.x = 250
	this.y = 500

	var moon = this.create(0, 0, 'moon')
	this.place_sprite(North, moon, 200)

	var sun = this.create(0, 0, 'sun')
	this.place_sprite(South, sun, 200)

	sleep_event.add(this.pass_time, this);

	// not in the main group
	this.lights = new Lights(game);
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
	sprite.alpha = 0.5
	return sprite
    }

    pass_time(){
	this.game.add.tween(this).to( { angle: '-90' },
				      3000,
				      Phaser.Easing.Circular.InOut, true);
    }

    update()
    {
    }
}
