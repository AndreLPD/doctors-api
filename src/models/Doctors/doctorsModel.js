const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const doctorsModel =  new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        select:false
    },
    name: {
        type:String, 
        required: true
    },
    active: {
        type: Boolean,
        default: true,
        select:false
    },
    createdAt: {
        type: Date,
        default:Date.now,
        select:false
    }

});

doctorsModel.plugin(mongoosePaginate);

mongoose.model("doctors", doctorsModel);