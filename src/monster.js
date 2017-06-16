import Phaser from 'phaser'
import pointFromPolar from './util.js'

export default class Monster extends Phaser.Sprite {

    constructor(game, hero){
	super(game, 0, 0, 'monster')

	this.food = hero
	this.frame = 2;
	this.animations.add('west', [12, 13, 14, 15, 16, 17, 18, 19], 15, true);
	this.animations.add('east', [28, 29, 30, 31, 32, 33, 34, 35], 15, true);
    }

    chase(){
	this.parent.angle = Phaser.Math.wrapAngle(this.parent.angle)
	return (this.parent.angle < -45 &&
		this.parent.angle > -135)
    }

    update () {
	var speed = 0.7

	if(this.chase()){
	    if(this.world.x > this.food.x){
		this.animations.play('west')
		this.parent.place_sprite(this.angle-90-speed, this)
	    }
	    else{
		this.animations.play('east')
		this.parent.place_sprite(this.angle-90+speed, this)
	    }
	}
	else
	    this.frame = 2
    }
}
