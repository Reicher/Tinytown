import Phaser from 'phaser'
import Space from './space.js'
import Hero from './hero.js'

export default class extends Phaser.State {
    init () {}

    preload () {}

    create () {
	var hero = new Hero(game)
	var space = new Space(game)
	//space.addHero(hero)
    }

    update () {
    }
}
