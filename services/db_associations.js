// Import your models
const Run = require('../models/Run');
const User = require('../models/User');
const Registration = require('../models/Registration');

// Define and export the setAssociations function
function setAssociations() {
  // Define associations here
  Run.belongsToMany(User, {
    through: Registration,
    foreignKey: 'race_id',
    otherKey: 'user_id',
  });

  User.belongsToMany(Run, {
    through: Registration,
    foreignKey: 'user_id',
    otherKey: 'race_id',
  });
}

// Export the setAssociations function
module.exports = setAssociations;
