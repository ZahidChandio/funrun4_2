// var express = require('express');
// var router = express.Router();
// const Run = require('models/Run');

// /* GET home page. */
// router.get('/', async (req, res) => {
//   const runs = await Run.findAll();
//   res.render('runs', {title: 'Available Runs', runlist: runs});
// });

// /* GET a single run from the database */
// router.get('/:id', async (req, res) => {
//   const requestedId = req.params.id;

//   // Query the database to get run with requested ID
//   const run = await Run.findOne({
//     where: {id: requestedId}
//   });

//   // Render the detail view of the run
//   res.render('runs/run', {
//     title: 'Run Details: ' + run.name,
//     run_details: run
//   });
// });


// module.exports = router;


const express = require('express');
const router = express.Router();
const Run = require('../models/Run'); // Adjust the import paths as needed
const User = require('../models/User'); // Adjust the import paths as needed

/* GET home page. */
router.get('/', async (req, res) => {
  const runs = await Run.findAll();
  res.render('runs', { title: 'Available Runs', runlist: runs });
  
});

/* GET a single run from the database */
router.get('/:id', async (req, res) => {
  const requestedId = req.params.id;

  try {
    // Query the database to get run with requested ID and include associated Users
    const run = await Run.findOne({
      where: { id: requestedId },
      include: User, // This includes the associated Users
    });
    console.log(run);
    if (!run) {
      // Handle the case where the Run with the given ID is not found
      return res.status(404).send('Run not found');
    }

    // Render the detail view of the run along with associated Users data
    res.render('runs/run', {
      title: 'Run Details: ' + run.name,
      run_details:run,
      // console.log(run_details)
    });

  } catch (error) {
    // Handle any errors that occur during the query or rendering
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

