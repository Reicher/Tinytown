import Phaser from 'phaser'

export default class Hero extends Phaser.Sprite {
    constructor(game, x, y) {
	super(game, x, y, 'sprites', 'hero_center')

	this.animations.add('left', Phaser.Animation.generateFrameNames('hero_walk_left', 1, 8), 15, true);
	this.animations.add('right', Phaser.Animation.generateFrameNames('hero_walk_right', 1, 6), 15, true);

	this.anchor.setTo(0.5, 1)
	this.scale.setTo(1.5)

	this.cursors = game.input.keyboard.createCursorKeys();
	game.add.existing(this)
    }

    update(){
	var speed = 0.5;

	if (this.cursors.left.isDown){
	    this.animations.play('left')
	    this.movement = speed
	}
	else if (this.cursors.right.isDown){
	    this.animations.play('right')
	    this.movement = -speed
	}
	else{
	    this.animations.stop()
	    this.movement = 0
	}
    }
}
