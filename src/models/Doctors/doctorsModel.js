const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
require("./profileDoctor");

const profileDoctor = mongoose.model("profileDoctor");

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
    children:[profileDoctor],
    child: profileDoctor,
    active: {
        type: Boolean,
        default: true,
        select:false
    },
    createdAt: {
        type: Date,
        default:Date.now,
        select:false
    },
});

doctorsModel.plugin(mongoosePaginate);

mongoose.model("doctors", doctorsModel);