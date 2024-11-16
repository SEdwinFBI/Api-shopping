//todo los parametros son necesarios para que detecte que estos son middleware de tipo error
export const logErrors = async(err,req,res,next)=>{

    next(err)
}
export const errorHandler= async(err,req,res,next)=>{

    res.status(500).json({
        "mesagge":err.message,
        "stack":err.stack
    })
}