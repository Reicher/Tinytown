import Phaser from 'phaser'

import Planet from './planet.js'

export default class Space extends Phaser.Group {
    constructor(game) {
	super(game)
	this.x = 250
	this.y = 500

	var moon = this.create(0, 400, 'sprites', 'moon')
	moon.anchor.setTo(0.5)

	var sun = this.create(0, -400, 'sprites', 'sun')
	sun.anchor.setTo(0.5)

	this.create_stars();

	var planet = this.planet = new Planet(game)
	this.add(planet)
    }


    create_stars(){
	var stars = game.add.graphics(-500, -500)
	stars.beginFill(0xFFFFFF, 0.4)
	for( var i = 0; i < 300; i++)
	    stars.drawCircle(game.rnd.integerInRange(0, 1000),
			     game.rnd.integerInRange(0, 1000),
			     2);

	stars.endFill();
	this.add(stars)
    }
}
