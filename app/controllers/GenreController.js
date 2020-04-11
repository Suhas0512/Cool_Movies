const Reviews=require('../model/Movies')
//setup apis
module.exports.list=(req,res)=>{
    Reviews.find()
    .then((reviews)=>{
        res.json(reviews)
    })
    .catch((err)=>res.json(err))
}
module.exports.show=(req,res)=>{
    const id=req.params.id
    Reviews.findById(id)
    .then((reviews)=>{
        if(reviews){
            res.json(reviews)
        }else{
            res.json({})
        }
    })
    .catch((err)=>res.json(err))
}
module.exports.create=(req,res)=>{
    const body=req.body
    const reviews=new Reviews(body)
    reviews.save()
    .then((reviews)=>{
        res.json({
            notice:'Successfully created',reviews
        })
    })
    .catch((err)=>res.json(err))
}
module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Reviews.findByIdAndUpdate(id,body,{new:true,runValidators:true})
    .then((reviews)=>{
        if(reviews){
            res.json(reviews)
        }else{
            res.json({})
        }
    })
    .catch((err)=>res.json(err))
}
module.exports.destroy=(req,res)=>{
    const id=req.params.id
    Reviews.findByIdAndDelete(id)
    .then((reviews)=>{
        if(reviews){
            res.json(reviews)
        }else{
            res.json({})
        }
    })
    .catch((err)=>res.json(err))
}

