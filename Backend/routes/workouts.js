const express = require('express')
const router = express.Router()
const model = require('../models/workoutModel.js')
const {getWorkouts, getWorkout, createWorkout,deleteWorkout, updateWorkout} = require('../controllers/workoutControllers.js')

// get all workouts
router.get('/', getWorkouts)

// get single workout
router.get('/:id',getWorkout)

// create new workout
router.post('/', createWorkout)

// delete single workout
router.post('/:id',deleteWorkout)

// update a workout
router.patch('/:id', updateWorkout)

module.exports = router