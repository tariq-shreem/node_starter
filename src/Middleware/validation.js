
const dataMethods = ['body','query','params','headers'];
const validation = (schema)=>{
    return (req,res,next)=>{
        const valiadtionArray = [];
        dataMethods.forEach(key=>{
            if(schema[key]){
               const validationResult = schema[key].validate(req[key],{abortEarly:false});

               if(validationResult.error){
                valiadtionArray.push(validationResult.error.details);
               }
            }
        } )
        if(valiadtionArray.length >0){
            return res.json({message:"valiation error",valiadtionArray});
        }return next();
}
}
export default validation;