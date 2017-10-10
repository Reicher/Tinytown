import Phaser from 'phaser'
import Hero from './hero.js'

export default class Planet extends Phaser.Group {
    constructor(game) {
	super(game)

	var surface = this.create(0, 0, 'sprites', 'planet')
	surface.anchor.setTo(0.5)

	this.hero = new Hero(game);
    }
}
