var HowToPlay = cc.LayerColor.extend({
  init: function(){
    this._super();
    this.addKeyboardHandlers();

    this.background = new backgroundHowTo();
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
      cc.director.runScene( new StartMenuScene());
    }
  },
  onKeyUp: function( keyCode, event ) {
    // console.log(keyCode);
  }
});

var StartHowToScene = cc.Scene.extend({
  onEnter: function(){
    this._super();
    var layer = new HowToPlay();
    layer.init();
    this.addChild(layer);
  }
});

var backgroundHowTo = cc.Sprite.extend({
  ctor: function(){
    this._super();
    var animation = new cc.Animation.create();
    animation.addSpriteFrameWithFile( 'res/images/howToPlay.png' );
    animation.addSpriteFrameWithFile( 'res/images/howToPlay1.png' );
    animation.setDelayPerUnit( 0.8 );
    var movingAction = cc.RepeatForever.create( cc.Animate.create( animation ) );
    this.runAction( movingAction );
  }
});
