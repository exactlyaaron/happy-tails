/* class file */
/* exported Samurai */
/* jshint unused:false */
/* global calculatePower, getImage, warriorId */

class Samurai {
  constructor(weapon, gender, name='Masamune', age='20', photo='samurai.jpg'){
    this.id = warriorId++;
    this.name = name;
    this.age = age * 1;
    this.gender = gender;
    this.photo = `../media/${photo}`;
    this.species = 'samurai';
    this.health = 100;
    this.weapon = weapon;
    this.weaponImg = getImage(weapon);
    this.damage = calculatePower(weapon);
  }
}
