// Config file to launch our application

const app = require('./app');

const server = app.listen(3000, () => {
    console.log(`Express app running on port ${server.address().port}`)
});