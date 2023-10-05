// var express = require('express');
// var router = express.Router();
// const User = require('../models/User');

// /* GET home page. */
// router.get('/', async (req, res) => {
//   const users = await User.findAll();
//   //res.send(countries);
//   res.render('users', {title: 'Runners', userlist: users});
// });

// /* GET a single user from the database */
// router.get('/:id', async (req, res) => {
//   const requestedId = req.params.id;

//   // Query the database to get run with requested ID
//   const user = await User.findOne({
//     where: {id: requestedId}
//   });

//   // Render the detail view of the run
//   res.render('users/user', {
//     title: 'User Details: ' + user.name,
//     user_details: user
//   });
// });

// module.exports = router;


var express = require('express');
var router = express.Router();
const  Run  = require('../models/Run'); // Make sure to adjust the import paths as needed
const User = require('../models/User');

/* GET home page. */
router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.render('users', { title: 'Runners', userlist: users });
});

/* GET a single user from the database */
router.get('/:id', async (req, res) => {
  const requestedId = req.params.id;

  try {
    // Query the database to get user with requested ID and include associated runs
    const user = await User.findOne({
      where: { id: requestedId },
      include: Run, // This includes the associated runs
    });

    if (!user) {
      // Handle the case where the User with the given ID is not found
      return res.status(404).send('User not found');
    }

    // Render the detail view of the user along with associated runs data
    res.render('users/user', {
      title: 'User Details: ' + user.first_name + ' ' + user.last_name,
      user_details: user,
    });
  } catch (error) {
    // Handle any errors that occur during the query or rendering
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
