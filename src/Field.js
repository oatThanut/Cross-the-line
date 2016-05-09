var Field = cc.Sprite.extend({
  ctor: function(numField){
    this._super();

    var pos = this.getPosition();
    this.car = [];
    this.car[0] = new Car('LEFT', pos.y);
    this.car[1] = new Car('RIGHT', pos.y);
    this.addChild(this.car[0]);
    this.addChild(this.car[1]);

    if(numField % 2 == 0){
      this.initWithFile('res/images/field1.png');
    }else{
      this.initWithFile('res/images/field2.png');
    }
  },
  DriveACar: function(){
    this.random = Math.round(Math.random());
    if(this.random == 0 && this.car[1].status == false){
      this.car[0].run();
    }else if(this.random == 1 && this.car[0].status == false){
      this.car[1].run();
    }
  },
  StopACar: function(){
    this.car[0].stopCar();
    this.car[1].stopCar();
  },
  CheckClose: function(obj){
    var yPosOfField = this.getPosition().y;
    if(this.car[0].closeTo(obj, yPosOfField) || this.car[1].closeTo(obj, yPosOfField)){
      return true;
    }else{
      return false;
    }
  }

});
