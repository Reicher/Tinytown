import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './boot'
import LoadState from './load'
import SplashState from './splash'
import MainMenuState from './mainmenu'
import GameState from './game'
import GameOverState from './gameover'

class Game extends Phaser.Game {

    constructor () {
	let width = 500
	let height = 500

	super(width, height, Phaser.AUTO, 'content', null)

	this.state.add('Boot', BootState, false)
	this.state.add('Load', LoadState, false)
	this.state.add('Splash', SplashState, false)
	this.state.add('MainMenu', MainMenuState, false)
	this.state.add('Game', GameState, false)
	this.state.add('GameOver', GameOverState, false)

	this.state.start('Boot')
    }
}

window.game = new Game()
