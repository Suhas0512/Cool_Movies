const mongoose=require('mongoose')
//schema
const Schema=mongoose.Schema
const reviewsSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    movie:{
        type:Schema.Types.ObjectId,ref:"Movies"
    },
    rating:{
        type:String,
        required:true
    }

})
//model
const Reviews=mongoose.model('Reviews',reviewsSchema)
module.exports=Reviews