var ForagerBee = function() {
  // should have a `color` property inherited from `bee` that is set to `yellow`
  // should have a `food` property that is inherited from grub
  Bee.call(this);
  // should have an `age` property that is set to `10`
  this.age = 10;
  // should have a `job` property that is set to `find pollen`
  this.job = 'find pollen';
  // should have a `canFly` property that is set `true`
  this.canFly = true;
  // should have a `treasureChest` property that is set to an empty array `[]`
  this.treasureChest = [];
};
// should have an `eat` method that is inherited from grub
ForagerBee.prototype = Object.create(Grub.prototype);
ForagerBee.prototype.constructor = ForagerBee;
// should have a `forage` method that allows the bee to add a `treasure` to the `treasureChest`
ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};

