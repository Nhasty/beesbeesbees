var Bee = function() {
  // should have a `food` property that is inherited from grub
  Grub.call(this);
  // should have an `age` property that is set to `5`
  this.age = 5;
  // should have a `color` property that is set to `yellow`
  this.color = 'yellow';
  // should have a `job` property that is set to `keep on growing`
  this.job = 'keep on growing';

};
// should have an `eat` method that is inherited from grub
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
