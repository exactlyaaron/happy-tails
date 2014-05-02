/* class file */
/* exported Berzerker */
/* jshint unused:false */
/* global calculatePower, getImage, warriorId */

class Berzerker {
  constructor(weapon, gender, name='Juggernaut', age='40', photo='berzerker.jpg'){
    this.id = warriorId++;
    this.name = name;
    this.age = age * 1;
    this.gender = gender;
    this.photo = `../media/${photo}`;
    this.species = 'berzerker';
    this.health = 100;
    this.weapon = weapon;
    this.weaponImg = getImage(weapon);
    this.damage = calculatePower(weapon);
  }
}
