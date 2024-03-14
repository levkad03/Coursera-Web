(function () {
  var JackGreeter = {};
  var greeting = "Hi ";
  JackGreeter.name = "Jack";

  JackGreeter.sayHi = function () {
    console.log(greeting + JackGreeter.name);
  };

  window.JackGreeter = JackGreeter;
})(window);
