var {User} = require('./../models/user');

var authenticate = (req, res, next) => {
  var name = req.header('x-auth');

  User.findByName(name).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    req.user = user;
    next();
  }).catch((e) => {
    res.status(401).send();
  });
};

module.exports = {authenticate};
