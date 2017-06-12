/* globals __DEV__ */
import Phaser from 'phaser'

export default function (r, t, degrees) {
    return new Phaser.Point(1,0).setMagnitude(r).rotate(0,0,t,degrees);
}
