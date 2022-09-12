var RetiredForagerBee = function() {
  // should inherit 'treasureChest' from foragerBee
  // food is inherited from grub
  ForagerBee.call(this);
  //age is 40
  this.age = 40;
  // job is 'gamble'
  this.job = 'gamble';
  // can fly is false
  this.canFly = false;
  // color is grey
  this.color = 'grey';
};
// eat method is inherited from Grub
RetiredForagerBee.prototype = Object.create(Grub.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
// forage method
RetiredForagerBee.prototype.forage = function() {
  //returns 'I am too old, let me play cards instead'
  return 'I am too old, let me play cards instead';
};
// gamble method of treasure
RetiredForagerBee.prototype.gamble = function(treasure) {
  // add treasure to treasureChest
  this.treasureChest.push(treasure);
};
