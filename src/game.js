/* globals __DEV__ */
import Phaser from 'phaser'

export default class extends Phaser.State {
    init () {}

    preload () {}

    create () {
	this.add.sprite(0, 0, 'space')

	this.planet = game.add.group();
	this.planet.x = 250;
	this.planet.y = 500;
	this.planet.pivot.x = 250;
	this.planet.pivot.y = 500;

	this.planet.create(0, 250, 'planet')
	this.planet.create(225, 155, 'tree1')
	this.planet.rotation = 60 - game.rnd.frac() * 120

	this.hero = this.add.sprite(225,155, 'hero')
	this.hero.animations.add('west', [12, 13, 14, 15, 16, 17, 18, 19], 15, true);
	this.hero.animations.add('east', [28, 29, 30, 31, 32, 33, 34, 35], 15, true);

	this.cursors = game.input.keyboard.createCursorKeys();
    }

    update () {
	if (this.cursors.left.isDown){
	    this.planet.rotation += 0.01
	    this.hero.animations.play('west')
	}
	else if (this.cursors.right.isDown){
	    this.planet.rotation -= 0.01
	    this.hero.animations.play('east')
	}
	else
	    this.hero.frame = 2
    }
}
