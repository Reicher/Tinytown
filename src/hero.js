import Phaser from 'phaser'

export default class Hero extends Phaser.Sprite {
    constructor(game, x, y) {
	super(game, x, y, 'hero')

	this.animations.add('west', [12, 13, 14, 15, 16, 17, 18, 19], 15, true);
	this.animations.add('east', [28, 29, 30, 31, 32, 33, 34, 35], 15, true);

	this.anchor.setTo(0.5, 1)
	this.scale.setTo(1.5)

	this.movement = 0;
	this.cursors = game.input.keyboard.createCursorKeys();

	this.using = new Phaser.Signal();
	this.sleeping = new Phaser.Signal();
	var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	spaceKey.onDown.add(this.interact, this);

	game.add.existing(this);
    }

    interact(){
	this.using.dispatch()
    }

    update(){
	var speed = 0.5;

	if (this.cursors.left.isDown){
	    this.animations.play('west')
	    this.movement = speed
	}
	else if (this.cursors.right.isDown){
	    this.animations.play('east')
	    this.movement = -speed
	}
	else{
	    this.frame = 2
	    this.movement = 0
	}
    }
}
