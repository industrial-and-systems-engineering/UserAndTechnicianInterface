import mongoose from 'mongoose';

const equipmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    isCalibrated: {
        type: Boolean,
        default: false
    },
    CalibrationDetails: {
        type: String
    },
}, 
    {
        timestamps: true
    },
);

const Equipment = mongoose.model('Equipment', equipmentSchema);

export default Equipment;

