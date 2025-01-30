import express from "express";
import Equipment from "../models/equipment.model.js";
import mongoose from "mongoose";

const router = express.Router();

router.post("/user/newEquipment", async (req, res) =>{
    let equipment = req.body;
    if(!equipment.name || !equipment.description){
        return res.status(400).json({success: false, message: "All fields are required"});
    }
    const newEquipment = new Equipment(equipment);
    try{
        await newEquipment.save();
        return res.status(201).json({ success: true, data: newEquipment });
    }catch(error){
        return res.status(500).json({ success: false, message: error.message });
    }
});

router.get("/user/equipment",async (req, res) =>{
    try {
        const equipments = await Equipment.find({ isCalibrated: false });
        return res.status(200).json({ success: true, data: equipments });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
});

router.get("/technician/equipment",async (req, res) =>{
    try{
        const equipments = await Equipment.find({ isCalibrated: true });
        return res.status(200).json({ success: true, data: equipments });
    }catch(error){
        return res.status(500).json({ success: false, message: error.message });
    }
});
router.put("/technician/updateEquipment/:id", async (req, res) => {
    const { id } = req.params;
    const equipment_des = req.body;

    if (!equipment_des.CalibrationDetails) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    try {
        const updatedProduct = await Equipment.findByIdAndUpdate(
            id,
            { description: equipment_des.description, isCalibrated: true },
            { new: true }
        );
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        console.error("Error in update product", error.message);
        res.status(500).json({ success: false, message: "server error" });
    }
});

export default router;