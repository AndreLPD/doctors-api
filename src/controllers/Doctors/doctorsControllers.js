const mongoose = require("mongoose");
require("../../models/Doctors/doctorsModel");
const multer = require('multer');
const upload = multer({dest:"../uploads/"})

const Doctor = mongoose.model("doctors");
module.exports = {

    async store(req, res){
        let { username, password, name, age, specialty, description, contact } = req.body;
        try {
            await Doctor.create({ username, password, name, age, specialty, description, contact });
            res.status(200).json({"result":"Sucess: Doctor created"})
     } catch (error) {
         res.status(400).json(error.message);
     }
    },

    async list(req, res){
        try {
            let result = await Doctor.paginate({active:true},{limit:5});
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json(error.message);
        }
    },
    
    async find(req, res){
        try {
            let {id} = req.params;
            let result = await Doctor.findById(id);

            res.status(200).json(result);

        } catch (error) {
            res.status(400).json(error.message);
        }
    },

    async update(req, res){
        try {
            let {id} = req.params;
            let result = await Doctor.findByIdAndUpdate(id, req.body, {new: true});
            
            res.status(200).json({"result":"Sucess: Doctor updated"})

        } catch (error) {
            res.status(400).json(error.message);
        }
    },

    async delete(req, res){
        try {
            let {id} = req.params;
            let result = await Doctor.findByIdAndUpdate(id, {active:false}, {new:true});

            res.status(200).json({"result":"Sucess: Doctor delected"})
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
    }
