/* class file */
/* exported Ninja */
/* jshint unused:false */
/* global calculatePower, getImage, warriorId */

class Ninja {
  constructor(weapon, gender, name='Sasuke', age='24', photo='ninja.jpg'){
    this.id = warriorId++;
    this.name = name;
    this.age = age * 1;
    this.gender = gender;
    this.photo = `../media/${photo}`;
    this.species = 'ninja';
    this.health = 100;
    this.weapon = weapon;
    this.weaponImg = getImage(weapon);
    this.damage = calculatePower(weapon);
  }
}
