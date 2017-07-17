import Phaser from 'phaser'

import Lights from './lights'
import pointFromPolar from './util.js'

var East = 0;
var South = 90;
var West = 180;
var North = 270;

export default class Celestials extends Phaser.Group {
    constructor(game, hero ) {
	super(game)
	this.x = 250
	this.y = 500

	this.hero = hero

	var moon = this.create(0, 0, 'moon')
	this.place_sprite(North, moon, 200)

	var sun = this.create(0, 0, 'sun')
	this.place_sprite(South, sun, 200)

	hero.sleep.add(this.pass_time, this);

	this.create_stars();

	// not in the main group
	this.lights = new Lights(game, hero);
    }


    create_stars(){
	// Stars
	this.stars = game.add.graphics(-500, -500)
	this.stars.beginFill(0xFFFFFF, 0.4)
	for( var i = 0; i < 300; i++)
	    this.stars.drawCircle(game.rnd.integerInRange(0, 1000),
				game.rnd.integerInRange(0, 1000),
				2);

	this.stars.endFill();
	this.add(this.stars)
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
	this.tween = this.game.add.tween(this).to(
	    { angle: '-90' },
	    3000,
	    Phaser.Easing.Circular.InOut, true);
    }

    update()
    {
	this.lights.update(this.hero.rotation + this.rotation)
    }
}
