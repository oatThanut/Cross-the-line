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
    if(this.random == 0){
      this.car[0].run();
    }else{
      this.car[1].run();
    }
  },
  StopACar: function(){
    this.car[0].stopCar();
    this.car[1].stopCar();
  }
});
