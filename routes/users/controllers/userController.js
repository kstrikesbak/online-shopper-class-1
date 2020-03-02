const User = require('../models/User');
const { validationResult } = require('express-validator');

module.exports = {
  register: (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    User.findOne({ email }).then(user => {
      if (user) return res.send('User Exists');
      else {
        const newUser = new User();
        newUser.profile.name = name;
        newUser.email = email;
        newUser.password = password;
        newUser
          .save()
          .then(user => {
            if (user) {
              res.status(200).json({ message: 'success', user });
            }
          })
          .catch(err => {
            return next(err);
          });
      }
    });
  }

  //   register: async (req, res, next) => {
  //     const errors = validationResult(req);
  //     const { name, email, password } = req.body;

  //     if (!errors.isEmpty()) {
  //       return res.status(422).json({ errors: errors.array() });
  //     }

  //     let user = await User.findOne({ email });

  //     try {
  //       if (user) {
  //         return res.status(500).json({ message: 'User already Exists' });
  //       }

  //       user = await User.create({
  //         ['profile.name']: name,
  //         email,
  //         password
  //       });

  //       return res.json({ message: 'Success', user });
  //     } catch (error) {
  //       return next(error);
  //     }
  //   }
};
