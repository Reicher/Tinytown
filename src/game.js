import Phaser from 'phaser'

export default class extends Phaser.State {
    init () {}

    preload () {}

    create () {
	this.logo = this.add.sprite(0, 0, 'sprites', 'space')
    }

    update () {
    }
}
