const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");


const {Schema} = mongoose;

const profileDoctor = new Schema({
    age: {
        type:String,
        required:true
    },
    specialty: {
        type:String, 
        required: true
    },
    description: {
        type:String, 
        required: true
    },
    contacts:{
        type: [String],
    },
    img:{
        name: String,
        desc: String,
        type: Buffer,
        contentType: String
    }
});

profileDoctor.plugin(mongoosePaginate);

mongoose.model("profileDoctor", profileDoctor);