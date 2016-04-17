var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super(screenHeight,screenWidth);
        // this.scheduleUpdate();

        // this.setPosition( new cc.Point( 0, 0 ) );



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
