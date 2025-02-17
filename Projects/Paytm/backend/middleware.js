const { JWT_SECRET } = require('./config')
const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {

    if(!JWT_SECRET){
        res.json({
            message: 'Invalid JWT_Token'
        })
    }

    //Returs Bearer token
    const authHeader = req.headers.authorization;
    
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(403).json({
            message: 'Invalid token'
        })
    }

    //Splitting Bearer and token
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(403).json({
            message: 'Invalid token format'
        });
    }
    
    //Verifying token
    try{
        const decoded = jwt.verify(token, JWT_SECRET);
        console.log(decoded.userId);
        
        if(decoded.userId){
            req.userId = decoded.userId;
            next();
        }
        else{
            return res.status(403).json({ 
                message: 'User not verified, login again'
            })
        }
    }
    catch(err){
        return res.status(403).json({
            message: 'Error while verifying token',
            Error: err.message
            
        })
    }
}

module.exports = authMiddleware;