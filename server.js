const sequelize = require("./config/connection");
const express = require("express");
const routes = require("./controllers");

// Above are our imports for our server.






const app = express();
const PORT = process.env.PORT || 3001;
// Above is our express instance and our port.


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
// Above is the middleware I use for my server.



sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
});

// Above, we start the server with the app.listen