import Phaser from 'phaser'

export default class extends Phaser.State {
    init () {
    }

    preload () {}

    create () {
	console.log("GAME OVER MAN!")

    }

    update () {
	this.game.input.onDown.add(()=>{
            this.state.start('MainMenu')
	}, this)
    }
}
