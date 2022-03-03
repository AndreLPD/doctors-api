const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
require("./profileDoctor");

const {Schema} = mongoose;

const profileDoctor = mongoose.model("profileDoctor");

const doctorsModel =  new Schema({
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
    profileDoctor:{
        type:Schema.Types.ObjectId,
        ref: "profileDoctor"
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
    },
});

doctorsModel.plugin(mongoosePaginate);

mongoose.model("doctors", doctorsModel);