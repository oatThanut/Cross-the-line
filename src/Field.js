var Field = cc.Sprite.extend({
  ctor: function(numField){
    this._super();
    // this.initWithFile('res/images/fullField1.png');
    if(numField % 2 == 0){
      this.initWithFile('res/images/field1.png');
    }else{
      this.initWithFile('res/images/field2.png');
    }
  }
})
