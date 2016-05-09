var GameOver = cc.LayerColor.extend({
  init: function(){
    this._super();
    this.addKeyboardHandlers();

    this.background = new backgroundGameOver();
    this.background.setPosition(400,300);
    this.addChild(this.background);

    return true;
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
  onKeyDown: function( keyCode, event ) {
    console.log(keyCode);
    if(keyCode == 13){
      cc.director.runScene( new StartScene());
    }
  },
  onKeyUp: function( keyCode, event ) {
    // console.log(keyCode);
  },
  quit: function(){
    this.quitButtonItem = new cc.MenuItemImage('res/images/startButton.png', 'res/images/startButton1.png', function(){
      this.quitButton.setEnabled(false);
      cc.director.runScene( new StartMenuScene());
    },this);
    this.quitButton = new cc.Menu( this.quitButtonItem);
    this.quitButton.setPosition(400,270);
    this.addChild(this.quitButton);
  }
});

var StartGameOverScene = cc.Scene.extend({
  onEnter: function(){
    this._super();
    var layer = new GameOver();
    layer.init();
    this.addChild(layer);
  }
});

var backgroundGameOver = cc.Sprite.extend({
  ctor: function(){
    this._super();
    var animation = new cc.Animation.create();
    animation.addSpriteFrameWithFile( 'res/images/gameOver.png' );
    animation.addSpriteFrameWithFile( 'res/images/gameOver1.png' );
    animation.setDelayPerUnit( 0.8 );
    var movingAction = cc.RepeatForever.create( cc.Animate.create( animation ) );
    this.runAction( movingAction );
  }
});
