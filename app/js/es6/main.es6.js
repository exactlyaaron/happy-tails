/* global Ninja, Berzerker, Mystic */
/* global warriorId:true */
/* global Samurai:true */
/* jshint unused:false */

(function(){
  'use strict';

  $(document).ready(init);

  let warriors = [];

  function init(){
    $('#add').click(add);
    $('#warriors').on('click', '.train', train);
  }

  function train(){
    debugger;
    console.log(this);
  }

  function add(){
    let gender = $('#gender').val();
    let name = $('#name').val() || undefined;
    let age = $('#age').val() || undefined;
    let photo = $('#photo').val();
    let species = $('#species').val();
    let weapon = $('#weapons').val();
    let warrior;

    switch(species){
    case 'Samurai':
        let warrior = new Samurai(weapon, gender, name, age, photo);
        break;
      case 'Ninja':
        let warrior = new Ninja(weapon, gender, name, age, photo);
        break;
      case 'Berzerker':
        let warrior = new Berzerker(weapon, gender, name, age, photo);
        break;
      case 'Mystic':
        let warrior = new Mystic(weapon, gender, name, age, photo);
        break;
      }

    warriors.push(warrior);
    display(warrior);
    console.log(warriors);

  }

  function display(warrior){

    let photo = $('#photo').val();
    let $wrapper = $(`<div class="wrapper">`);
    let $imgdiv = $('<div class="image">');


    $imgdiv.css('background-image', 'url('+warrior.photo+')');

    let $statsdiv = $('<div class="stats">');
    $statsdiv.append(`<div>Name: <span>${warrior.name}</span></div>
                      <div>Age: <span>${warrior.age}</span></div>
                      <div>Gender: <span>${warrior.gender}</span></div>
                      <div>Health: <span>${warrior.health}%</span></div>
                      <div>Damage: <span>${warrior.damage} pts</span></div>
                      <div><img src=${warrior.weaponImg}><button class="train">TRAIN</button></div>`);

    $wrapper.append($imgdiv, $statsdiv);
    $(`#${warrior.species}s`).append($wrapper);
  }

})();
