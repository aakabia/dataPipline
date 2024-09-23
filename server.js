const sequelize = require("./config/connection");




async function connect(){
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.close();
    console.log('Connection has been closed')

  } catch (error) {
    console.error('Unable to connect to the database:', error);
}
};

connect()
















