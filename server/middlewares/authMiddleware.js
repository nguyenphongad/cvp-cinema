const jwt = require('jsonwebtoken');


const MiddleAuthToken = (req, res, next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res
            .status(401)
            .json({error:"Invalid token format!"});
    }
    const getAuthToken = authHeader.slice(7);
    try {
        const decodedToken = jwt.verify(getAuthToken, process.env.JWT_SECRET);
        if(!decodedToken){
            return res
                .status(401)
                .json({error:"Invalid token"})
        }
        req.user = decodedToken;
        next();
    } catch (error) {
        console.log(error);
        res.json({error:"Internal server error!"})
    }
}

module.exports = MiddleAuthToken;