import Phaser from 'phaser'

export default class extends Phaser.State {
    preload() {
	// preload the loading indicator first before anything else
	this.load.image('preloaderBar', 'assets/images/Loading_bar.png')
    }
    create() {
	// set scale options
	this.input.maxPointers = 1
	this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE ;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.scale.refresh()
	this.game.stage.smoothed = false;

	// start the Preloader state
	this.state.start('Load')
    }
};
