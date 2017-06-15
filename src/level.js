import Phaser from 'phaser'
import pointFromPolar from './util.js'

export default class Level extends Phaser.Group {
    constructor(game) {
	super(game)
	this.x = 250
	this.y = 500

	this.create_heavens()
	var planet = this.create(0, 0, 'planet')
	planet.anchor.setTo(0.5);
    }

    create_sprite(angle, height, key){
	return this.place_sprite(angle,
				 height,
				 this.create(0, 0, key))
    }

    place_sprite(angle, height, sprite){
	sprite.anchor.setTo(0.5, 1)
	sprite.position = pointFromPolar(250+height, angle, true)
	return sprite
    }

    create_heavens(){
	var graphics = game.add.graphics(-500, -500)
	graphics.beginFill(0xFFFFFF, 0.4)
	for( var i = 0; i < 300; i++){
	    graphics.drawCircle(game.rnd.integerInRange(0, 1000),
				game.rnd.integerInRange(0, 1000),
				2);
	}
	graphics.endFill();
	this.add(graphics)

	this.create_sprite(-90, 100, 'moon')
	this.create_sprite(90, 100, 'sun')
    }

    update()
    {
    }


}
