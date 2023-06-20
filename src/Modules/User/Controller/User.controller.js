import userModel from "../../../../DB/model/User.model.js";

export const profile = (req,res)=>{
        return res.json({message:"profile"});
}
export const profilePic = async (req,res,next)=>{
    
        if(!req.file){
                return next(new Error("Please provide a file"))
        }
        await userModel.findByIdAndUpdate(req.id,{profilePic:req.file.dest},{new:true})
        return res.json(req.file);
}

export const coverPic = async (req,res)=>{
    
        if(!req.files?.length){
                return next(new Error("Please provide a file"))

        }

        //await userModel.findByIdAndUpdate(req.id,{profilePic:`upload/${req.file.filename}`})
        const coverPic=[];
        for (const file of req.files) {
                coverPic.push(file.dest)
        }
       const user= await userModel.findByIdAndUpdate(req.id,{coverPic:coverPic},{new:true})
        
        return res.json({message:"success",user});
}

