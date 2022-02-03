const mongoose = require("mongoose");
require("../../models/Doctors/doctorsModel");
const multer = require('multer');
const upload = multer({dest:"../uploads/"});

const Doctor = mongoose.model("doctors");
module.exports = {

    async profile(req, res){
        try{
            let {id} = req.params;
            let result = await Doctor.find(id);
            res.status(200).json(result);
        }catch(error){
            res.status(404).json(error.message);
        }
    },

    async uploadAvatar(){
            upload.single('avatar'),function(req, res, next){
                try{
                    let {img} = req.body;
                    let {id} = req.params;
                    let result = await Doctor.findByIdAndUpdate(id, {img},{new:true});
                    res.status(200).json(result);
                }catch(error){
                    res.status(404).json(error.message);
                }

            }
    }
}