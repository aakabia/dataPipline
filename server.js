const sequelize = require("./config/connection");
const { Exercise } = require("./models");

async function connect() {
  try {
    await sequelize.sync({ force: false });
    console.log("Db synced");

    const excercises = await Exercise.findAll();
    // Above brings our data back with lots of unncessary properties.

    const exerciseCleaned = JSON.stringify(excercises, null, 2);
    // Above, cleans up the data to include the data we want.

    console.log(exerciseCleaned);

    await sequelize.close();
    console.log("Connection has been closed");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

connect();

// Above is checking my connection to my db
