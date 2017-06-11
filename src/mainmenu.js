import Phaser from 'phaser'

export default class extends Phaser.State {
    init () {
	this.stage.backgroundColor = '#000000'
    }

    create () {
	this.add.sprite(0, 0, 'menu')
	this.game.camera.flash('#000000')
	this.game.input.onDown.add(this.playPressed, this)
    }

    playPressed () {
	this.state.start('Game');
    }
}
