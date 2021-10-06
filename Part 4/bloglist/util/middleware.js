exports.tokenExtractor = function(req, res, next) {
    const authorization = req.get('authorization')
    let token =''
    
    if(authorization && authorization.toLowerCase().startsWith('bearer')) {
      token = authorization.substring(7) 
    }
    req.token = token
    next()
}