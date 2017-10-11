import Phaser from 'phaser'
import Space from './space.js'

export default class extends Phaser.State {
    init () {}

    preload () {}

    create () {
	this.space = new Space(game)
    }

    update () {

    }
}
