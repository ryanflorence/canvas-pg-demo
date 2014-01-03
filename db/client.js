var pg = require('pg'); 
var conString = require('../config/database').dev.constring
module.exports = function() {
  return new pg.Client(conString);
};

