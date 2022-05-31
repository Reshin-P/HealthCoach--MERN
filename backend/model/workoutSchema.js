import mongoose from "mongoose";

const workoutSchema = mongoose.Schema({
    workout: {
        type: String,
        required: true
    },
    program: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    diet1: {
        type: String,
        required: true
    },
    diet2: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    preview: {
        type: String,
        required: true
    },
    dietimage: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        required: true,
        default: false
    },
    isBlocked: {
        type: Boolean,
        required: true,
        default: false
    },
    trainer: {
        type: String,
        required: true
    },
    trainerid: {
        type: mongoose.Types.ObjectId,
        ref: "Trainer",
        required: true
    }
},
    {
        timestamp: true
    })

const Workout = mongoose.model('workout', workoutSchema)
export default Workout