import Phaser from 'phaser'

export default class Lights extends Phaser.Group {
    constructor(game, hero) {
	super(game)
	this.tint = game.add.graphics(0, 0)
	this.tint.beginFill(0xffffff, 0.15);
	this.tint.drawRect(0, 0, 500, 500);
	this.tint.endFill();
	this.add(this.tint)
    }

    update(rot)
    {
	var light = Math.abs(Math.sin(rot *0.5))

	var ambient = Phaser.Color.interpolateColor(0x003366,
						    0xFDB813,
						    100,
						    100 * light,
						    1)
	this.tint.tint = ambient

	var sky = Phaser.Color.interpolateColor(0x000000,
						0x7ec0ee,
						100,
						100 * light,
						1)
	this.game.stage.backgroundColor = sky

    }
}
