/* class file */
/* exported Mystic */
/* jshint unused:false */
/* global calculatePower, getImage, warriorId */

class Mystic {
  constructor(weapon, gender, name='Zuo Ci', age='75', photo='mystic.jpg'){
    this.id = warriorId++;
    this.name = name;
    this.age = age * 1;
    this.gender = gender;
    this.photo = `../media/${photo}`;
    this.species = 'mystic';
    this.health = 100;
    this.weapon = weapon;
    this.weaponImg = getImage(weapon);
    this.damage = calculatePower(weapon);
  }
}
