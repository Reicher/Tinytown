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

	this.hero = this.add.sprite(225, 255, 'hero')
	this.hero.animations.add('west', [12, 13, 14, 15, 16, 17, 18, 19], 15, true);
	this.hero.animations.add('east', [28, 29, 30, 31, 32, 33, 34, 35], 15, true);
	this.hero.anchor.setTo(0.5, 1)
	this.hero.scale.setTo(1.5)

	this.tint = this.add.graphics(0, 0)
	this.tint.beginFill(0xffffff, 0.2);
	this.tint.drawRect(0, 0, 500, 500);
	this.tint.endFill();

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

	var time = Math.abs(Math.sin((this.planet.rotation) *0.5))

	var c = Phaser.Color.interpolateColor(0x003366, 0xFDB813, 100, 100 * time, 1)
	this.tint.tint = c



    }
}
