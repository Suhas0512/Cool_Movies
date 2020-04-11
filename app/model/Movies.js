const mongoose=require('mongoose')
//schema
const Schema=mongoose.Schema
const moviesSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    reviews:{
        type:Schema.Types.ObjectId,ref:"Reviews"
    },//subdocument
    genre:{
        type:Schema.Types.ObjectId,ref:"Genre"
    }
})
//model
const Movies=mongoose.model('Movies',moviesSchema)
module.exports=Movies