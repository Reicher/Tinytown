/* globals __DEV__ */
import Phaser from 'phaser'

import Space from './space.js'
import Planet from './planet.js'
import Hero from './hero.js'
import Level from './level.js'

export default class extends Phaser.State {
    init () {}

    preload () {}

    create () {

	this.level = new Level(this.game)

	this.hero = new Hero(game, 250, 255)

	// this.tint = this.add.graphics(0, 0)
	// this.tint.beginFill(0xffffff, 0.2);
	// this.tint.drawRect(0, 0, 500, 500);
	// this.tint.endFill();
    }

    update () {
	this.level.angle += this.hero.movement

	// var time = Math.abs(Math.sin((this.planet.rotation) *0.5))

	// var c = Phaser.Color.interpolateColor(0x003366, 0xFDB813, 100, 100 * time, 1)
	// this.tint.tint = c
    }
}
