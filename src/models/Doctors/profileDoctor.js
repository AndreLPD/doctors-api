const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const {Schema} = mongoose;

const profileDoctor = new Schema({
    doctor:{
        type:Schema.Types.ObjectId,
        ref: 'doctors'
    },
    img:{
        name: String,
        desc: String,
        type: Buffer,
        contentType: String
    },
    age: String,
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

    }
});

profileDoctor.plugin(mongoosePaginate);

mongoose.model("profileDoctor", profileDoctor);