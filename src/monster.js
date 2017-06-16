import Phaser from 'phaser'
import pointFromPolar from './util.js'

export default class Monster extends Phaser.Sprite {

    constructor(game){
	super(game, 0, 0, 'monster')

	// his.food = hero
	this.frame = 2;
	this.animations.add('west', [12, 13, 14, 15, 16, 17, 18, 19], 15, true);
	this.animations.add('east', [28, 29, 30, 31, 32, 33, 34, 35], 15, true);
    }

    update () {
	var speed = 0.1

	console.log(this.position);
    }
}
