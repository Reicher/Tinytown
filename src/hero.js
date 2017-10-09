import Phaser from 'phaser'

export default class Hero extends Phaser.Sprite {
    constructor(game, x, y) {
	super(game, x, y, 'sprites', 'hero')

	this.animations.add('west', [12, 13, 14, 15, 16, 17, 18, 19], 15, true);
	this.animations.add('east', [28, 29, 30, 31, 32, 33, 34, 35], 15, true);

	this.anchor.setTo(0.5, 1)
	this.scale.setTo(1.5)

	this.movement = 0;
	this.cursors = game.input.keyboard.createCursorKeys();

	game.add.existing(this);
    }

    update(){
	var speed = 0.5;

	if (this.cursors && this.cursors.left.isDown){
	    this.animations.play('west')
	    this.movement = speed
	}
	else if (this.cursors && this.cursors.right.isDown){
	    this.animations.play('east')
	    this.movement = -speed
	}
	else if(this.cursors){
	    this.animations.stop()
	    this.frame = 2
	    this.movement = 0
	}
    }
}
