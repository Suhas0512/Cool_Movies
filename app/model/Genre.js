const mongoose=require('mongoose')
//schema
const Schema=mongoose.Schema
const genreSchema = new Schema({
    name:{
        type:String,
        required:true
    }
})
//model
const Genre=mongoose.model('Genre',genreSchema)
module.exports=Genre