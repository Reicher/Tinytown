import Phaser from 'phaser'

import Monster from './monster.js'
import pointFromPolar from './util.js'

var East = 0;
var South = 90;
var West = 180;
var North = 270;

export default class Level extends Phaser.Group {
    constructor(game) {
	super(game)
	this.x = 250
	this.y = 500

	this.create_heavens()
	this.create_earth()
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
	// Stars
	var graphics = game.add.graphics(-500, -500)
	graphics.beginFill(0xFFFFFF, 0.4)
	for( var i = 0; i < 300; i++)
	    graphics.drawCircle(game.rnd.integerInRange(0, 1000),
				game.rnd.integerInRange(0, 1000),
				2);

	graphics.endFill();
	this.add(graphics)

	this.create_sprite(North, 'moon', 200)
	this.create_sprite(South, 'sun', 200)
    }

    create_earth(){
	var planet = this.create(0, 0, 'planet')
	planet.anchor.setTo(0.5);

	// From Top, counter-clock
	this.create_sprite(North+30, 'tree2');
	this.create_sprite(North+15, 'tree1');
	this.create_sprite(North-10, 'tree2');
	this.create_sprite(North-10, 'tree2');
	this.create_sprite(North-20, 'tree2');
	this.create_sprite(North-30, 'cross');
	this.create_sprite(North-40, 'tree1');

	this.create_sprite(West+30, 'tree2');
	var fire = this.create_sprite(West, 'campfire');
	fire.animations.add('burn', [0, 1], 5, true);
	fire.animations.play('burn');

	this.create_sprite(West-10, 'tree2');
	this.create_sprite(West-15, 'tree2');
	this.create_sprite(West-25, 'tree1');
	this.create_sprite(West-45, 'tree2');

	this.create_sprite(South, 'stuga');

	this.create_sprite(South-25, 'tree3');
	this.create_sprite(South-40, 'tree2');
	this.create_sprite(South-45, 'tree3');

	this.create_sprite(East+35, 'tree3');
	this.create_sprite(East+28, 'tree3');
	this.create_sprite(East+10, 'tree3');

	this.monster = new Monster(this.game);
	this.add(this.monster);
	this.place_sprite(East, this.monster);

	this.create_sprite(East-15, 'tree1');
	this.create_sprite(East-27, 'tree3');
	this.create_sprite(East-34, 'tree3');
	this.create_sprite(East-45, 'tree2');

    }

    update()
    {
	this.monster.update();
    }


}
