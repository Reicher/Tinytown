import Phaser from 'phaser'

export default class extends Phaser.State {
    init () {
    }

    preload () {}

    create () {
	console.log("GAME OVER MAN!")

	this.add.sprite(0, 0, 'end')

	this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(
	    function () { this.state.start('MainMenu')}, this);

	var style = { font: "bold 32px Arial", fill: "#000", wordWrap: true, wordWrapWidth: 300};
	var text = game.add.text(100, 100, "Is this really how it ends? There must be another way!", style);

    }

    update () {
	this.game.input.onDown.add(()=>{
            this.state.start('MainMenu')
	}, this)
    }
}
