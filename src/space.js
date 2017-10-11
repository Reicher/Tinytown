import Phaser from 'phaser'

import Planet from './planet.js'

export default class Space extends Phaser.Group {
    constructor(game) {
	super(game)
	this.x = 250
	this.y = 500

	var moon = this.create(0, -400, 'sprites', 'moon')
	moon.anchor.setTo(0.5)

	var sun = this.create(0, 400, 'sprites', 'sun')
	sun.anchor.setTo(0.5)

	this.createStars();

	var planet = this.planet = new Planet(game)
	this.add(planet)

	this.hero = planet.hero
    }

    passTime(){
	this.game.add.tween(this).to(
	    { angle: '-90' },
	    3000,
	    Phaser.Easing.Circular.InOut, true);

	this.game.add.tween(this.planet).to(
	    { angle: '+90' },
	    3000,
	    Phaser.Easing.Circular.InOut, true);
    }

    createStars(){
	var stars = game.add.graphics(-500, -500)
	stars.beginFill(0xFFFFFF, 0.4)
	for( var i = 0; i < 300; i++)
	    stars.drawCircle(game.rnd.integerInRange(0, 1000),
			     game.rnd.integerInRange(0, 1000),
			     2);

	stars.endFill();
	this.add(stars)
    }

    update(){
	this.rotation += this.hero.movement * 0.01
    }
}
