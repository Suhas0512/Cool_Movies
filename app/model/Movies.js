const mongoose=require('mongoose')
//schema
const Schema=mongoose.Schema
const moviesSchema = new Schema({
    title:{
        type:String,
        required:true
    }
})
//model
const Movies=mongoose.model('Movies',moviesSchema)
module.exports=Movies