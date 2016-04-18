var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super(screenHeight,screenWidth);
        // this.scheduleUpdate();

        // this.setPosition( new cc.Point( 0, 0 ) );

        this.initialField();
        this.manageField();

        this.player = new Player();
        this.player.setPosition(new cc.Point(400,150));
        this.addChild(this.player);

        this.addKeyboardHandlers();

        return true;
    },
    onKeyDown: function( keyCode, event ) {
      console.log(keyCode);
    },
    onKeyUp: function( keyCode, event ) {
      if( keyCode == 32){
        this.player.jump();
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

    },
    moveField(){

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
