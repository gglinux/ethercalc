// Generated by LiveScript 1.2.0
(function(){
  this.__emailer__ = null;
  this.include = function(){
    var emailer;
    if (this.__emailer__) {
      return this.__emailer__;
    }
    emailer = {};
    emailer.log = function(){
      return console.log("email tester");
    };
    return this.__emailer__ = emailer;
  };
}).call(this);
