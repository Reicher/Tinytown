import Phaser from 'phaser'
import Monster from './monster.js'
import pointFromPolar from './util.js'

export default class Planet extends Phaser.Group {
    constructor(game) {
	super(game)

	this.x = 250
	this.y = 500
	this.pivot.x = 250
	this.pivot.y = 500

	this.sky = this.create(250, 500, 'sky')
	this.sky.anchor.setTo(0.5);

	this.create(0, 250, 'planet')

	var night = -90 //270
	var dawn = 0 //360
	var day = 90 //270
	var dusk = 180 //-180

	this.putOnPlanet(night-20, 'tree1');
	this.putOnPlanet(night-40, 'cross');
	this.putOnPlanet(night+30, 'tree1');
	this.monster = new Monster(this.game, night);
	this.add(this.monster)

	this.putOnPlanet(dawn+10, 'tree1');
	var fire = this.putOnPlanet(dawn-15, 'campfire');
	fire.animations.add('burn', [0, 1], 5, true);
	fire.animations.play('burn');

	this.putOnPlanet(dawn-30, 'tree2');
	this.putOnPlanet(dawn-45, 'tree2');

	this.putOnPlanet(day, 'stuga');
	this.putOnPlanet(day-30, 'tree1');

	this.putOnPlanet(dusk, 'tree1');
	this.putOnPlanet(dusk-30, 'tree1');

	this.putOnPlanet(dusk+20, 'tree2');
    }

    putOnPlanet(angle, key){
	var thing = this.create(250, 500, key)
	var compensate = thing.width / 15;
	var pos = pointFromPolar(250-compensate, angle, true)
	thing.position.x += pos.x
	thing.position.y += pos.y
	thing.anchor.setTo(0.5, 1)
	thing.angle = angle + 90

	return thing
    }

    update() {
	// 0 = night 1 = day
	var time = Math.abs(Math.sin(this.rotation*0.5))
	this.angle %= 359// Cannot use 360 for whatever reason.
	this.sky.angle -= 0.05

	this.sky.alpha = 0.9 * time

	var c = Phaser.Color.interpolateColor(0x000000, 0x7ec0ee, 100, 100*time, 1)
	this.game.stage.backgroundColor = c
    }


}
