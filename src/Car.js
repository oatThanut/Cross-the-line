var Car = cc.Sprite.extend({
  ctor: function(direction, fieldPos){
    this._super();
    this.status = false;
    this.dir = direction;
    var initialPos = this.getPosition();
    if(this.dir == 'LEFT'){
      this.initWithFile('res/images/carL.png');
      this.setPosition( new cc.Point(840, fieldPos+30));
    }else{
      this.initWithFile('res/images/carR.png');
      this.setPosition( new cc.Point(-40, fieldPos+30));
    }
    this.velocity = 2*(1+Math.round((Math.random()*5)));

  },
  update: function(){
    var position = this.getPosition();
    if(this.dir == 'LEFT'){
      if(position.x<-40){
        this.setPosition( new cc.Point(840 , position.y));
      }else{
        this.setPosition( new cc.Point(position.x-=this.velocity , position.y));
      }
    }else if(this.dir == 'RIGHT'){
      if(position.x>840){
        this.setPosition( new cc.Point(-40 , position.y));
      }else{
        this.setPosition( new cc.Point(position.x+=this.velocity , position.y));
      }
    }
  },
  closeTo: function( obj, yPosOfField ) {
    var myPos = this.getPosition();
    var oPos = obj.getPosition();
    return ( Math.abs( myPos.x - oPos.x) <= 40) && ( Math.abs(yPosOfField - oPos.y)  <= 40 );
  },
  run: function(){
    this.status = true;
    this.scheduleUpdate();
  },
  stopCar: function(){
    this.status = false;
    var position = this.getPosition();
    if(this.dir == 'LEFT'){
      this.setPosition( new cc.Point(840, position.y));
    }else{
      this.setPosition( new cc.Point(-40, position.y));
    }
    this.unscheduleUpdate();
  }
});
