import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    category:{
        type:mongoose.ObjectId,
        ref: 'category',
        require:true,
    },
    quantity:{
        type:Number,
        require:true,
    },
    photo:{
        data:Buffer,
        contentType:String
    },
    shipping:{
        type:Boolean,
    },
},{timestamps:true})

export default mongoose.model('product',productSchema)