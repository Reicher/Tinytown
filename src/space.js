import Phaser from 'phaser'

export default class Space extends Phaser.Group {
    constructor(game) {
	super(game)

	this.x = 250
	this.y = 500
	this.pivot.x = 250
	this.pivot.y = 500

	var graphics = game.add.graphics(0, 0)
	graphics.beginFill(0xFFFFFF, 0.4)
	for( var i = 0; i < 300; i++){
	    graphics.drawCircle(game.rnd.integerInRange(-500, 1000),
				game.rnd.integerInRange(0, 1000),
				2);
	}
	graphics.endFill();
	this.add(graphics)

	var moon = this.create(250, 50, 'moon')
	moon.anchor.setTo(0.5)

	var sun = this.create(250, 950, 'sun')
	sun.anchor.setTo(0.5)
    }
}
