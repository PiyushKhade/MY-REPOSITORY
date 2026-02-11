const jwt = require("jsonwebtoken");

module.exports=(req,res,next)=>{
    const token=req.header("Authorization")?.replace('Bearer ',"");

    if(!token){
        return res.status(401).json({message:"Token not found"});
    }

    try {
        const decode = jwt.verify(token,'secretkey');
        req.user = decode;
        next();
    } catch (error) {
        res.status(401).json({message:"Invalid Token"})
    }
}