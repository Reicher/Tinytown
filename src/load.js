import Phaser from 'phaser'

export default class extends Phaser.State {
    preload() {
	// set background color and preload image
	this.game.stage.backgroundColor = '#000000';
	this._preloadBar = this.game.add.sprite(game.world.centerX, game.world.centerY, 'preloaderBar');
	this._preloadBar.anchor.setTo(0.5)

	this.game.load.setPreloadSprite(this._preloadBar);

	this.load.image('tnsLogo', './assets/images/tns-logo.png')
	this.load.image('menu', './assets/images/menu.png')
	this.load.image('space', './assets/images/space.png')
	this.load.image('planet', './assets/images/planet.png')
	this.load.image('sky', './assets/images/sky.png')
	this.load.image('tree1', './assets/images/tree1.png')
	this.load.image('stuga', './assets/images/stuga.png')
	this.load.spritesheet('hero', './assets/images/hero.png', 50, 100)

	// Church corridor
	// this.load.spritesheet('preacher_man', './assets/images/church/church_main48x117.png', 48, 117)
    }

    create() {
	this.state.start('Splash')
    }
};
