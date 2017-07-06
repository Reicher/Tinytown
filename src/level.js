import Phaser from 'phaser'

import Monster from './monster.js'
import Clouds from './clouds.js'
import pointFromPolar from './util.js'

var East = 0;
var South = 90;
var West = 180;
var North = 270;

export default class Level extends Phaser.Group {
    constructor(game, hero) {
	super(game)
	this.x = 250
	this.y = 500

	this.hero = hero
	this.hero.using.add(this.interaction, this)

	this.create_heavens()
	this.create_earth()
    }

    interaction(){
	if (Phaser.Rectangle.intersects(this.hero.getBounds(),
					this.fire.getBounds())){
	    this.hero.sleeping.dispatch()
	}
    }

    create_sprite(angle, key, height = 0){
	return this.place_sprite(angle,
				 this.create(0, 0, key),
				 height)
    }

    place_sprite(angle, sprite, height = 0){
	sprite.anchor.setTo(0.5)
	var true_height =
	    250
	    + height
	    + sprite.height/2
	    - sprite.width/16

	sprite.position = pointFromPolar(true_height,
					 angle,
					 true)
	sprite.angle = angle+90
	return sprite
    }

    create_heavens(){
	this.clouds = new Clouds(game)
	this.add(this.clouds)
    }

    create_earth(){
	var planet = this.create(0, 0, 'planet')
	planet.anchor.setTo(0.5);

	// From Top, counter-clock

	// fairy forest
	this.create_sprite(North+30, 'tree2');
	this.create_sprite(North+15, 'tree1');
	this.create_sprite(North-10, 'tree2');
	this.create_sprite(North-10, 'tree2');
	this.create_sprite(North-30, 'cross');

	// Campfire place
	this.create_sprite(West+30, 'tree2');
	this.fire = this.create_sprite(West, 'campfire');
	this.fire.animations.add('burn', [0, 1], 5, true);
	this.fire.animations.play('burn');

	this.create_sprite(West-10, 'tree2');
	this.create_sprite(West-15, 'tree2');
	this.create_sprite(West-25, 'tree1');
	this.create_sprite(West-45, 'tree2');

	// cabin
	this.create_sprite(South, 'stuga');

	this.create_sprite(South-25, 'tree3');
	this.create_sprite(South-40, 'tree2');
	this.create_sprite(South-45, 'tree3');

	// monster
	this.create_sprite(East+35, 'tree2');
	this.create_sprite(East+28, 'tree3');
	this.create_sprite(East+10, 'tree3');

	this.monster = new Monster(this.game, this.hero);
	this.add(this.monster);
	this.place_sprite(East, this.monster);

	this.create_sprite(East-15, 'tree3');
	this.create_sprite(East-34, 'tree3');
	this.create_sprite(East-45, 'tree2');

    }

    update()
    {
	this.monster.update();
	var dist = Phaser.Math.distance(this.hero.worldPosition.x,
					this.hero.worldPosition.y,
					this.monster.worldPosition.x,
					this.monster.worldPosition.y)

	if (dist != 0 && dist < 60) // for some reason dist is 0 at start
	    this.over = true

	this.clouds.update();
    }
}
