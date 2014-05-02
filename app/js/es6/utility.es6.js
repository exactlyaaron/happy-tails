/* exported calculatePower, warriorId, getImage */

var warriorId = 0;

function calculatePower(weapon){
  'use strict';
  let max;

  switch(weapon){
  case 'Katana':
      max = 10;
      break;
    case 'Great Axe':
        max = 20;
        break;
    case 'Bow & Arrow':
        max = 15;
        break;
    case 'Sorcery':
        max = 30;
        break;
  }

  return Math.ceil (Math.random() * max);
}

function getImage(weapon){
  'use strict';

  let img = '../media/';

  switch(weapon){
  case 'Katana':
        img  += 'katana.png';
        break;
    case 'Great Axe':
        img  += 'axe.png';
        break;
    case 'Bow & Arrow':
        img  += 'arrow-weapon.png';
        break;
    case 'Sorcery':
        img  += 'sorcery.png';
        break;
  }

  return img;
}
