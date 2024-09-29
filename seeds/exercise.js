const { Exercise } = require("../models");

async function apiCall() {
  try {
    const response = await fetch(
      "https://exercisedb.p.rapidapi.com/exercises?limit=30&offset=0",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "exercisedb.p.rapidapi.com",
          "x-rapidapi-key":
            "e975291592msh0560ee3812ca2c5p1439b7jsn1521af29330c",
        },
      }
    );

    if (!response.ok) {
      console.error("Failed to fetch data. Status:", response.status);
      return; // Exit early if the response is not OK and log the status.
    }

    // Above is our fetch call to our api including the method and headers

    const data = await response.json();

    // Above we await the response and parse it to json.

    const filteredData = data.map((obj) => {
      const { id, secondaryMuscles, ...newobj } = obj;
      // Above destructuring a object with the spread operator can help you filter properties out of your object.
      // Above, we are  mapping through each obj in the data and assiging the id and secondary muscles property to their own variables.
      // Last, we are destrucuring the rest of the properties to the new obj with the spread operator, this returns a new filtered obj.

      return newobj;
    });

    // Above is how we filter our data.

    //console.log(filteredData);

    return filteredData;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function seedDbWithExercise(func) {
  try {
    const data = await func();
    // Note : func is async so dont forget to use await for promise.
    await Exercise.bulkCreate(data);
    console.log("DATABASE Seeded 🌱");
  } catch (error) {
    console.error("An error occured:", error);
  }
}

module.exports = { apiCall, seedDbWithExercise };
