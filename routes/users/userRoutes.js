const express = require('express');
const router = express.Router();

const userController = require('./controllers/userController');
const userValidation = require('./utils/userValidation');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Register working before controller
// router.post('/register', (req, res, next) => {
//   User.findOne({ email: req.body.email }).then(user => {
//     if (user) return res.send('User Exists');
//     else {
//       const newUser = new User();

//       newUser.profile.name = req.body.name;
//       newUser.email = req.body.email;
//       newUser.password = req.body.password;

//       newUser
//         .save()
//         .then(user => {
//           if (user) {
//             res.status(200).json({ message: 'success', user });
//           }
//         })
//         .catch(err => {
//           return next(err);
//         });
//     }
//   });
// });
router.get('/register', (req, res) => {
  res.render('auth/register');
});
router.post('/register', userValidation, userController.register);

module.exports = router;
