var query = require('../db/query');

exports.main = function(req, res) {
  query("select * from users", function(err, users) {
    res.json(users);
  });
};

