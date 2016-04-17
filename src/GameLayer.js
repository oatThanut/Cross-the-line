var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super(screenHeight,screenWidth);
        // this.scheduleUpdate();

        // this.setPosition( new cc.Point( 0, 0 ) );

        this.initialField();
        this.manageField();

        this.addKeyboardHandlers();

        return true;
    },
    onKeyDown: function( keyCode, event ) {


    },
    onKeyUp: function( keyCode, event ) {

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
          // this.fieldArr[i].setPosition( new cc.Point(screenWidth/2.0,screenHeight/2.0));
          this.addChild(this.fieldArr[i]);
          // this.fieldArr[i].randomPosition();
          // this.fieldArr[i].scheduleUpdate();
      }
    },
    manageField: function(){
      var initialHeight = 30;
      for(var i = 0; i < 10; i++){
        // this.fieldArr[i].setPosition( new cc.Point(screenWidth/2.0,screenHeight/2.0));
        // this.addChild(this.fieldArr[i]);
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
