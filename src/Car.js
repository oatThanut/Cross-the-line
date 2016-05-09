var Car = cc.Sprite.extend({
  ctor: function(direction, fieldPos){
    this._super();
    // console.log('car');
    this.status = false;
    this.dir = direction;
    var initialPos = this.getPosition();
    if(this.dir == 'LEFT'){
      this.initWithFile('res/images/carL.png');
      // this.setPosition( new cc.Point(800, fieldPos+30));
      this.setPosition( new cc.Point(840, fieldPos+30));
    }else{
      this.initWithFile('res/images/carR.png');
      // this.setPosition( new cc.Point(0, fieldPos+30));
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
    // console.log("car::: [X:"+myPos.x+" , Y:"+myPos.y+"]");
    // console.log("player::: [X:"+oPos.x+" , Y:"+oPos.y+"]");
    return ( Math.abs( myPos.x - oPos.x) <= 40) && ( Math.abs(yPosOfField - oPos.y)  <= 40 );
  },
  run: function(){
    this.status = true;
    this.scheduleUpdate();
  },

  stopCar: function(){
    this.status = false;
    // this.unscheduleUpdate();
    var position = this.getPosition();
    if(this.dir == 'LEFT'){
      this.setPosition( new cc.Point(840, position.y));
      // this.setPosition( new cc.Point(800, position.y));
      // this.setPosition( new cc.Point(800, 570));
    }else{
      this.setPosition( new cc.Point(-40, position.y));
      // this.setPosition( new cc.Point(0, position.y));
      // this.setPosition( new cc.Point(0, 570));
    }
    this.unscheduleUpdate();
  }


});
