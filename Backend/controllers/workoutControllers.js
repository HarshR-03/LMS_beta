const model = require('../models/workoutModel.js')
const mongoose = require('mongoose')

const getWorkouts = async (req, res) => {
    const workouts = await model.find({}).sort({createdAt:-1})
    res.status(200).json(workouts)
}

const getWorkout = async(req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error: 'No such Workout'
        })
    }

    const workout = await model.findById(id)

    if(!workout){
        return res.status(404).json({error:"No workout found"})
    }
    else{
        return res.status(200).json(workout)
    }
}

const createWorkout  = async (req,res)=>{
    const {title,reps,load} = req.body
    try{
        const workout = await model.create({title,reps,load})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({err:error.message})
    }
}

const deleteWorkout = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error: 'No such Workout'
        })
    }

    const workout = await model.findOneAndDelete({_id:id})
    if(!workout){
        return res.status(404).json({error:"No such workout"})
    }
    else{
        return res.status(200).json(workout)
    }
}

const updateWorkout = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error: 'No such Workout'
        })
    }

    const workout = await model.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!workout){
        return res.status(404).json({error:"No such workout"})
    }
    else{
        return res.status(200).json(workout)
    }
}

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout,
}