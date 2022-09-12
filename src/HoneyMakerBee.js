var HoneyMakerBee = function() {
  // should have a color property inherited from `bee` that is set to `yellow`
  // should have a food property that is inherited from grub
  Bee.call(this);
  // should have an age property that is set to `10`
  this.age = 10;
  // should have a job property that is set to `make honey`
  this.job = 'make honey';
  // should have a `honeyPot` property that is set to `0`
  this.honeyPot = 0;
};

// should have an eat method that is inherited from grub
HoneyMakerBee.prototype = Object.create(Grub.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
// should have a `makeHoney` method that adds `1` to that honeyBee\'s honeyPot
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};
// should have a `giveHoney` method that subtracts `1` from that honeyBee\'s honeyPot
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};