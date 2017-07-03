import Phaser from 'phaser'

import Hero from './hero.js'
import Level from './level.js'
import Celestials from './celestials.js'
import Foreground from './foreground.js'

export default class extends Phaser.State {
    init () {}

    preload () {}

    create () {
	this.hero = new Hero(game, 250, 255)
	this.level = new Level(game, this.hero)

	this.world.bringToTop(this.hero)

	this.foreground = new Foreground(game)
	this.celestials = new Celestials(game,
					 this.hero);

    }

    update () {
	var rot = this.hero.movement
	this.level.angle += rot
	this.foreground.angle += rot
	this.celestials.angle += rot

	this.celestials.lights.hero_rot = this.level.rotation;

	if (this.level.over)
	    this.state.start('GameOver')
    }
}
