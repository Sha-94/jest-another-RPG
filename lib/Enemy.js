const Potion = require("./Potion");

function Enemy(name = '', weapon = 'hands') {
  this.name = name; 
  this.weapon = weapon;
  this.health = Math.floor(Math.random() * 10 + 95);
  this.strength = Math.floor(Math.random() * 5 + 7);
  this.agility = Math.floor(Math.random() * 5 + 7);
  this.potion = new Potion();

}

Enemy.prototype.getDescription = function() {
  return `A ${this.name} holding a ${this.weapon} has appeared!`;
};

Enemy.prototype.getHealth = function(){
  return `${this.name}'s health is now ${this.health}.`;
}

Enemy.prototype.getAttackValue = function(){
  const min = this.strength - 5;
  const max = this.strength + 5; 

  return Math.floor(Math.random() * (max - min) + min);
}

Enemy.prototype.isAlive = function(){
  return this.health > 0;
}

Enemy.prototype.reduceHealth = function(damage){
  this.health = damage > this.health ? 0 : this.health - damage;
}

module.exports = Enemy;