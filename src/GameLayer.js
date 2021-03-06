var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super(screenHeight,screenWidth);
        this.initialField();
        this.manageField();

        this.addKeyboardHandlers();

        this.player = new Player();
        this.player.setPosition(new cc.Point(400,150));
        this.addChild(this.player);

        this.scoreLabel = cc.LabelTTF.create( '0', 'Arial', 40 );
        this.scoreLabel.setPosition( new cc.Point( 750, 570 ) );
        this.addChild( this.scoreLabel );
        this.scoreDiff = 0;

        this.scheduleUpdate();
        return true;
    },
    update: function(){
      for(var i = 0 ; i<10 ; i++){
        if(this.fieldArr[i].CheckClose(this.player)){
          cc.director.runScene(new StartGameOverScene());
        }
      }
    },
    onKeyDown: function( keyCode, event ) {
    },
    onKeyUp: function( keyCode, event ) {
      if( keyCode == 32){
        this.player.jump();
        if(this.player.direction == "UP" && this.scoreDiff == 0){
          if(this.player.getPositionY()>150){
            this.scoreLabel.setString(parseInt(this.scoreLabel.string) + 1);
            this.moveField();
            this.switchField();
          }
        }else if(this.player.direction == "UP"){
          this.scoreDiff+=1;
        }else if(this.player.direction == "DOWN"){
          if(this.player.getPositionY()>30){
            this.scoreDiff-=1;
          }
        }
      }else if( keyCode == 37){
        this.player.turn(4);
      }else if( keyCode == 38){
        this.player.turn(1);
      }else if( keyCode == 39){
        this.player.turn(2);
      }else if( keyCode == 40){
        this.player.turn(3);
      }
    },
    addKeyboardHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( keyCode, event ) {
                self.onKeyDown( keyCode, event );
            },
            onKeyReleased: function( keyCode, event ) {
                self.onKeyUp( keyCode, event );
            }
        }, this);
    },
    initialField: function(){
      this.fieldArr = [];
      for (var i = 0; i < 10; i++) {
          this.fieldArr[i] = new Field(i);
          this.addChild(this.fieldArr[i]);
      }
    },
    manageField: function(){
      var initialHeight = 30;
      for(var i = 0; i < 10; i++){
        this.fieldArr[i].setPosition( new cc.Point(400,initialHeight));
        initialHeight+=60;
      }
    },
    switchField(){
      for(var i = 0; i < 10; i++){
        var tempFieldPosition = this.fieldArr[i].getPosition();
        if(tempFieldPosition.y < 0){
          //random start / stop
          this.fieldArr[i].setPosition(new cc.Point(400,570));
          if(Math.round(Math.random()*2) == 1){
            this.fieldArr[i].DriveACar();
          }else {
            this.fieldArr[i].StopACar();
          }
        }
      }
    },
    moveField(){//shift the field downward
      this.player.setPosition( new cc.Point(this.player.getPositionX(),this.player.getPositionY()-60));
      for (var i = 0; i < 10; i++) {
        var tempFieldPosition = this.fieldArr[i].getPosition();
        this.fieldArr[i].setPosition(new cc.Point(tempFieldPosition.x,(tempFieldPosition.y)-60));
      }
    }
});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});
