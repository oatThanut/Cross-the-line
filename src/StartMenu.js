var StartMenu = cc.LayerColor.extend({
  init: function(){
    this._super();

    this.background = new backgroundStart();
    this.background.setPosition( new cc.Point(400, 300));
    this.addChild( this.background );

    this.startButton();
    this.howToPlay();
    return true;
  },
  startButton: function(){
    this.playButtonItem = new cc.MenuItemImage('res/images/startButton.png', 'res/images/startButton1.png', function(){
      this.playButton.setEnabled(false);
      cc.director.runScene( new StartScene());
    },this);
    this.playButton = new cc.Menu( this.playButtonItem);
    this.playButton.setPosition(400,270);
    this.addChild(this.playButton);
  },
  howToPlay: function(){
    this.howToPlayItem = new cc.MenuItemImage('res/images/howToPlayButton.png', 'res/images/howToPlayButton1.png', function(){
      this.howToPlayButton.setEnabled(false);
      cc.director.runScene( new StartHowToScene());
    },this);
    this.howToPlayButton = new cc.Menu( this.howToPlayItem);
    this.howToPlayButton.setPosition(400,150);
    this.addChild(this.howToPlayButton);
  }
});

var StartMenuScene = cc.Scene.extend({
  onEnter: function(){
    this._super();
    var Menulayer = new StartMenu();
    Menulayer.init();
    this.addChild(Menulayer);
  }
});

var backgroundStart = cc.Sprite.extend({
  ctor: function(){
    this._super();
    var animation = new cc.Animation.create();
    animation.addSpriteFrameWithFile( 'res/images/startMenu0.png' );
    animation.addSpriteFrameWithFile( 'res/images/startMenu1.png' );
    animation.addSpriteFrameWithFile( 'res/images/startMenu2.png' );
    animation.setDelayPerUnit( 0.4 );
    var movingAction = cc.RepeatForever.create( cc.Animate.create( animation ) );
    this.runAction( movingAction );
  }
});
