import Phaser from 'phaser'

import Hero from './hero.js'
import Level from './level.js'
import Lights from './lights'

export default class extends Phaser.State {
    init () {}

    preload () {}

    create () {
	this.hero = new Hero(game, 250, 255)
	this.level = new Level(game, this.hero)
	this.world.bringToTop(this.hero)
	this.lights = new Lights(game);

    }

    update () {
	this.level.angle += this.hero.movement
	this.lights.hero_rot = this.level.rotation;
    }
}
