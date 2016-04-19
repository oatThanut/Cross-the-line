var Player = cc.Sprite.extend({
  ctor: function(){
    this._super();
    this.initWithFile( 'res/images/test.png' );
    this.direction = 'UP';
  },
  jump: function(){
    var position = this.getPosition();
    if(this.direction == 'UP'){
      this.setPosition(new cc.Point( position.x , position.y+=60));
    }else if(this.direction == 'RIGHT'){
      this.setPosition(new cc.Point( position.x+=60 , position.y));
    }else if(this.direction == 'DOWN'){
      if(position.y>30){
        this.setPosition(new cc.Point( position.x , position.y-=60));
      }
    }else if(this.direction == 'LEFT'){
      this.setPosition(new cc.Point( position.x-=60 , position.y));
    }
  },
  turn: function(dir){
    if(dir == 1){
      this.direction = 'UP';
      this.setRotation(0);
    }else if(dir == 2){
      this.direction = 'RIGHT';
      this.setRotation(90);
    }else if(dir == 3){
      this.direction = 'DOWN';
      this.setRotation(180);
    }else if(dir == 4){
      this.direction = 'LEFT';
      this.setRotation(270);
    }
  },

  getPositionX: function(){
    var position = this.getPosition();
    return position.x;
  },
  getPositionY: function(){
    var position = this.getPosition();
    return position.y;
  }

});
