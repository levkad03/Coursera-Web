(function () {
  var JohnGreeter = {};
  var greeting = "Hello ";

  JohnGreeter.name = "John";

  JohnGreeter.sayHello = function () {
    console.log(greeting + JohnGreeter.name);
  };

  window.JohnGreeter = JohnGreeter;
})(window);
