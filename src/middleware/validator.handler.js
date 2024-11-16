export const validatorHandler = (schema,props)=>{
    return (req,res,next)=>{
        //indicar de donde viene los datos
        //req.body
        //req.params = req["params"]= req.params
        const data = req[props]
        const {error} = schema.validate(data)
        if(error){
            next(error)
        }else{
        next();}
    }
    
}