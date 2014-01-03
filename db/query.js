var client = require('./client');

module.exports = function(query, next) {
  var db = client();
  db.connect(function(err) {
    if (err) return next(err);
    db.query(query, function(err, result) {
      db.end();
      next(err, result.rows);
    });
  });
};

