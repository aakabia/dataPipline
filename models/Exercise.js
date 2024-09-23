const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class Exercise extends Model {}

Exercise.init(
  {
    // Model attributes are defined here

    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    bodyPart: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    equipment: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    gifUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    target: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    instructions: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      // Above is a Array of strings for sequalize.
      allowNull: false,
    },
  },

  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Exercise", // We need to choose the model name
  }
);

//console.log(Exercise === sequelize.models.Exercise);
// Commented out above is to check if our model is created correctly.

module.exports = Exercise
