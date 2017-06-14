import Phaser from 'phaser'
import pointFromPolar from './util.js'

export default class Monster extends Phaser.Sprite {

    constructor(game, angle, hero) {
	super(game, 250, 500, 'monster')

	this.food = hero
	var pos = pointFromPolar(250, angle-90, true);
	this.position.x += pos.x
	this.position.y += pos.y
	this.angle += angle

	this.anchor.setTo(0.5, 1)

	this.frame = 2;
	this.animations.add('west', [12, 13, 14, 15, 16, 17, 18, 19], 15, true);
	this.animations.add('east', [28, 29, 30, 31, 32, 33, 34, 35], 15, true);
    }

    update () {
	var speed = 0.1

	if(Phaser.Math.distance(this.world.x, this.world.y,
				this.food.x, this.food.y) < 170)
	{
	    if(this.world.x > this.food.x){
		this.animations.play('west')
	    }
	    else{
		this.animations.play('east')
	    }
	}
	else
	    this.frame = 2;

    }
}
