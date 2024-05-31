import mongoose, { Mongoose, model } from "mongoose";

const contactSchema= new mongoose.Schema({
    name:{type:String},
    Number:{type:Number}
})

export default mongoose.model.contacts || mongoose.model('contact',contactSchema)
