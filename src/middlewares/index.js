module.exports = {

    authenticate (req, res, next) {

        const { authentication } = req.headers;
        const { user_id } = req.params;

        if(!authentication) return res.status(400).json({message: "ops! no token"})
        if(authentication !== user_id) return res.status(400).json({message:"sorry...not allowed bro"})

        next()

    }

}