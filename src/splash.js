import Phaser from 'phaser'

export default class extends Phaser.State {
    init () {
	this.stage.backgroundColor = '#000000'
    }

    create () {
	this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'sprites', 'tns-logo')
	this.logo.anchor.setTo(0.5)
	this.logo.alpha = 0
	var next_state = 'Game'

	// Start fade in of TNS logo
	let fadeInTween = this.game.add.tween(this.logo).to({alpha: 1}, 2000, Phaser.Easing.Linear.None, true)
	fadeInTween.onComplete.add(()=>{
	    // Wait one second with full alpha
	    this.game.time.events.add(Phaser.Timer.SECOND * 1, ()=>{
		// Start to fade out
		let fadeOutTween = this.game.add.tween(this.logo).to({alpha: 0}, 2000, Phaser.Easing.Linear.None, true)
		fadeOutTween.onComplete.add(()=>{
		    this.state.start(next_state)
		}, this)
	    }, this)
	})

	this.game.input.onDown.add(()=>{
            this.state.start(next_state)
	}, this)

	this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(
	    function () { this.state.start(next_state)}, this);
    }
}
