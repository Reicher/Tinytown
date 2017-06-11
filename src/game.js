/* globals __DEV__ */
import Phaser from 'phaser'

import Space from './space.js'
import Planet from './planet.js'

export default class extends Phaser.State {
    init () {}

    preload () {}

    create () {
	this.space = new Space(this.game)
	this.planet = new Planet(this.game)

	this.hero = this.add.sprite(225, 160, 'hero')
	this.hero.animations.add('west', [12, 13, 14, 15, 16, 17, 18, 19], 15, true);
	this.hero.animations.add('east', [28, 29, 30, 31, 32, 33, 34, 35], 15, true);

	this.cursors = game.input.keyboard.createCursorKeys();
    }

    update () {
	var speed = 0.5
	if (this.cursors.left.isDown){
	    this.planet.angle += speed
	    this.space.angle += speed
	    this.hero.animations.play('west')
	}
	else if (this.cursors.right.isDown){
	    this.planet.angle -= speed
	    this.space.angle -= speed
	    this.hero.animations.play('east')
	}
	else
	    this.hero.frame = 2
    }
}
