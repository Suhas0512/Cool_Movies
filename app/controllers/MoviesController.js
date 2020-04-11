const Movies=require('../model/Movies')
//setup apis
module.exports.list=(req,res)=>{
    Movies.find()
    .then((movies)=>{
        res.json(movies)
    })
    .catch((err)=>res.json(err))
}
module.exports.show=(req,res)=>{
    const id=req.params.id
    Movies.findById(id)
    .then((movies)=>{
        if(movies){
            res.json(movies)
        }else{
            res.json({})
        }
    })
    .catch((err)=>res.json(err))
}
module.exports.create=(req,res)=>{
    const body=req.body
    const movies=new Movies(body)
    movies.save()
    .then((movies)=>{
        res.json({
            notice:'Successfully created',movies
        })
    })
    .catch((err)=>res.json(err))
}
module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Movies.findByIdAndUpdate(id,body,{new:true,runValidators:true})
    .then((movies)=>{
        if(movies){
            res.json(movies)
        }else{
            res.json({})
        }
    })
    .catch((err)=>res.json(err))
}
module.exports.destroy=(req,res)=>{
    const id=req.params.id
    Movies.findByIdAndDelete(id)
    .then((movies)=>{
        if(movies){
            res.json(movies)
        }else{
            res.json({})
        }
    })
    .catch((err)=>res.json(err))
}

