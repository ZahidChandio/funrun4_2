// Config file to launch our application

const app = require("./app");

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Express app running on port ${server.address().port}`);
});
