function Trip(){
  this.days = [ new Day()];
  this.idx = 0;
}

Trip.prototype.currentDay = function(){
  return this.days[this.idx];
}

Trip.prototype.addDay = function(day){
  this.days.push(day || new Day());
  this.idx = this.days.length - 1;
}

Trip.prototype.removeDay = function(){
  this.days.splice(this.idx, 1);
  this.idx = 0;
  if(this.days.length == 0)
    this.addDay();
}

Trip.prototype.addItem = function(item){
  this.currentDay().addItem(item);
}

Trip.prototype.removeItemByIdAndLabel = function(id, label){
  this.currentDay().removeItemByIdAndLabel(id, label);
}


