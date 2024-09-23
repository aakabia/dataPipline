const sequelize = require("./config/connection");




async function connect() {
  try {
    await sequelize.sync({ force: true });
    console.log(Excercise === sequelize.models.Excercise);
    await sequelize.close();
    console.log("Connection has been closed");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

connect();

// Above is checking my connection to my db  
