import Phaser from 'phaser'

export default class extends Phaser.State {
    preload() {
	// set background color and preload image
	this.game.stage.backgroundColor = '#000000';
	this._preloadBar = this.game.add.sprite(game.world.centerX, game.world.centerY, 'preloaderBar');
	this._preloadBar.anchor.setTo(0.5)

	this.game.load.setPreloadSprite(this._preloadBar);

	this.game.load.atlasJSONArray('sprites',
				      'assets/sprites.png',
				      'assets/sprites.json')

	// this.load.image('tnsLogo', './assets/images/tns-logo.png')
	// this.load.image('menu', './assets/images/menu.png')
	// this.load.image('end', './assets/images/end.png')

	// this.load.image('planet', './assets/images/planet.png')
	// this.load.image('sky', './assets/images/sky.png')

	// this.load.image('moon', './assets/images/moon.png')
	// this.load.image('sun', './assets/images/sun.png')

	// this.load.image('tree1', './assets/images/tree1.png')
	// this.load.image('tree2', './assets/images/tree2.png')
	// this.load.image('tree3', './assets/images/tree3.png')

	// this.load.image('cloud1', './assets/images/cloud1.png')
	// this.load.image('cloud2', './assets/images/cloud2.png')

	// this.load.image('bush', './assets/images/bush.png')

	// this.load.image('cross', './assets/images/cross.png')
	// this.load.image('stuga', './assets/images/stuga.png')

	// this.load.spritesheet('hero', './assets/images/hero.png', 17, 32)
	// this.load.spritesheet('monster', './assets/images/monster.png', 50, 100)
	// this.load.spritesheet('campfire', './assets/images/campfire.png', 40, 40)
    }

    create() {
	this.state.start('Splash')
    }
};
