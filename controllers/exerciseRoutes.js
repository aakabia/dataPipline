const router = require("express").Router();
const { Exercise } = require("../models");
// Above, we require express router and our excercise model.


router.get("/", async (req, res) => {
    // Above, is a get route used to get all the excercise data from our db.
    try {
      let exerciseData = await Exercise.findAll();
      // Above we get all blog data and get the associated user who created the blog.


      if (!exerciseData) {
        res.status(400).json({ message: "No data found!" });
        return;
      }

      // Above, checks if any blog data exists.


      const newExerciseData = exerciseData.map((exercise) => exercise.get({ plain: true }));

      // ABove we clean the data if exists. 
  
      
      res.status(200).json(newExerciseData)
  
      // Above, render is used to transfer the data to handle bars.
    } catch (err) {
      res.status(500).json(err);
    }
});




router.get("/:id", async (req, res) => {
    // Above is a get route to find one excercise by id

    try {
      const excerciseId = req.params.id;
      const exerciseData = await Exercise.findByPk(excerciseId);
      // Above, we get the blog data.

      if (!exerciseData) {
        res.status(400).json({ message: "No data found!" });
        return;
      }
      // Above we check that the data exists.

      const newExerciseData = exerciseData.get({ plain: true });
      // Above, we set the blog data plain to true to clean up the data
  
   
  
      res.status(200).json(newExerciseData);
    } catch (err) {
      res.status(500).json(err);
    }
});




module.exports = router;

// Above we export our router 