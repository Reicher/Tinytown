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

	this.planet.sky = this.planet.create(250, 500, 'sky')
	this.planet.sky.anchor.setTo(0.5);

	this.planet.create(0, 250, 'planet')

	var night = -90 //270
	var dawn = 0 //360
	var day = 90 //270
	var dusk = 180 //-180

	this.putOnPlanet(night, 'tree1');

	this.putOnPlanet(dawn, 'tree1');

	this.putOnPlanet(day, 'stuga');
	this.putOnPlanet(day-30, 'tree1');

	this.putOnPlanet(dusk, 'tree1');
	this.putOnPlanet(dusk-30, 'tree1');

	this.hero = this.add.sprite(225, 160, 'hero')
	this.hero.animations.add('west', [12, 13, 14, 15, 16, 17, 18, 19], 15, true);
	this.hero.animations.add('east', [28, 29, 30, 31, 32, 33, 34, 35], 15, true);

	this.cursors = game.input.keyboard.createCursorKeys();
    }

    pointFromPolar(r, t, degrees) {
	return new Phaser.Point(1,0).setMagnitude(r).rotate(0,0,t,degrees);
    }

    putOnPlanet(angle, key){

	var thing = this.planet.create(250, 500, key)
	var compensate = thing.width / 15;
	var pos = this.pointFromPolar(250-compensate, angle, true)
	thing.position.x += pos.x
	thing.position.y += pos.y
	thing.anchor.setTo(0.5, 1)
	thing.angle = angle + 90
    }

    update () {
	var speed = 0.5
	if (this.cursors.left.isDown){
	    this.planet.angle += speed
	    this.hero.animations.play('west')
	}
	else if (this.cursors.right.isDown){
	    this.planet.angle -= speed
	    this.hero.animations.play('east')
	}
	else
	    this.hero.frame = 2

	this.planet.angle %= 359// Cannot use 360 for whatever reason.
	this.planet.sky.angle -= 0.01

	this.planet.sky.alpha = 0.90 * Math.abs(Math.sin(this.planet.rotation*0.5))
    }
}
