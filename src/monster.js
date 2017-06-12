import Phaser from 'phaser'

export default class Monster extends Phaser.Sprite {
    pointFromPolar(r, t, degrees) {
	return new Phaser.Point(1,0).setMagnitude(r).rotate(0,0,t,degrees);
    }

    constructor(game, angle) {
	super(game, 250, 500, 'monster')
	this.anchor.setTo(0.5, 1);
	var pos = this.pointFromPolar(250, angle, true);
	this.position.x += pos.x
	this.position.y += pos.y
	this.anchor.setTo(0.5, 1)
	this.angle = angle + 90

	this.frame = 2;
	this.animations.add('west', [12, 13, 14, 15, 16, 17, 18, 19], 15, true);
	this.animations.add('east', [28, 29, 30, 31, 32, 33, 34, 35], 15, true);

    }

}
