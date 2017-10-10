import Phaser from 'phaser'
import Space from './space.js'

export default class extends Phaser.State {
    init () {}

    preload () {}

    create () {
	this.space = new Space(game)
	this.hero = this.space.getHero();
    }

    update () {
	if(this.hero.movement > 0)
	    this.space.rotation += 0.01;
	else if(this.hero.movement < 0)
	    this.space.rotation -= 0.01;
    }
}
