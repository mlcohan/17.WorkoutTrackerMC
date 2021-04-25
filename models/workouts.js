const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for the workout"
  },
  type: {
    type: String,
    required: "Enter a type of exercise"
  },
  weight: {
    type: Number,
    required: "Enter a weight"
  },
  sets: {
    type: Number,
    required: "Enter the number of sets"
  },
  reps: {
    type: Number,
    required: "Enter the number of reps"
  },
  duration: {
    type: Number,
    required: "Enter a duration time in minutes"
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
