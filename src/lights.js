import Phaser from 'phaser'

export default class Lights extends Phaser.Group {
    constructor(game) {
	super(game)
	this.tint = game.add.graphics(0, 0)
	this.tint.beginFill(0xffffff, 0.15);
	this.tint.drawRect(0, 0, 500, 500);
	this.tint.endFill();
	this.add(this.tint)

	this.hero_rot = 0;
    }

    update() // in radians
    {
	var light = Math.abs(Math.sin(this.hero_rot *0.5))
	var c = Phaser.Color.interpolateColor(0x003366,
					      0xFDB813,
					      100,
					      100 * light,
					      1)
	this.tint.tint = c


    }
}
