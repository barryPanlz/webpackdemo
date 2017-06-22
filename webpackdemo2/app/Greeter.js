var config = require('../config.json');//引入config.json
module.exports = function() {
  var greet = document.createElement('div');
  greet.id="root1";
  greet.textContent = config.greetText;
  return greet;
};
