const mongoose = require("mongoose");
require("../../models/Doctors/doctorsModel");
require("../../models/Doctors/profileDoctor");
const multer = require('multer');
const upload = multer({dest:"../uploads/"});

const Doctor = mongoose.model("doctors");
module.exports = {

    async profile(req, res){
        try{
            let {id} = req.params;
            let{age, specialty, description, contacts} = req.body;
            let doctor = await Doctor.findByIdAndUpdate({id}, {age, specialty, description, contacts});

            res.status(200).json({doctor});
        }catch(error){
            res.status(404).json(error.message);
        }
    },

    /*async upload.single('avatar'),function(req, res, next){
         uploadAvatar(){
                try{
                    let {img} = req.body;
                    let {id} = req.params;
                    let result = await Doctor.findByIdAndUpdate(id, {img},{new:true});
                    res.status(200).json(result);
                }catch(error){
                    res.status(404).json(error.message);
                }

            }
        }*/
}