import Phaser from 'phaser'
import Hero from './hero.js'

export default class Planet extends Phaser.Group {
    constructor(game) {
	super(game)

	var surface = this.create(0, 0, 'sprites', 'planet')
	surface.anchor.setTo(0.5)

	// Fire as test object
	var fire = this.create(-250, 0, 'sprites')
	fire.angle -= 90
	fire.anchor.setTo(0.5, 1)
	fire.animations.add('burn', Phaser.Animation.generateFrameNames('fire', 1, 2), 15, true)
	fire.animations.play('burn')

	this.hero = new Hero(game, 250, 250)
    }
}
