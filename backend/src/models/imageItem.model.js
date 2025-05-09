const mongoose =require("mongoose")

const { Schema } = mongoose;
const imageItemSchema = new  Schema({


    images: [
        {
            type: Object,
            required: true,
        }
    ],
    creatAt:{
        type: Date,
        default: Date.now()
    }
 

})
const imageItem = mongoose.model("imageItems", imageItemSchema);
module.exports = imageItem