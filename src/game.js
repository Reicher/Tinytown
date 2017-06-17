import Phaser from 'phaser'

import Hero from './hero.js'
import Level from './level.js'
import Lights from './lights'
import Foreground from './foreground.js'

export default class extends Phaser.State {
    init () {}

    preload () {}

    create () {
	this.hero = new Hero(game, 250, 255)
	this.level = new Level(game, this.hero)
	this.world.bringToTop(this.hero)
	this.foreground = new Foreground(game)
	this.lights = new Lights(game);

    }

    update () {
	this.level.angle += this.hero.movement
	this.foreground.angle += this.hero.movement
	this.lights.hero_rot = this.level.rotation;
    }
}
