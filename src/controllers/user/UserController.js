const User = require('../../models/User');

module.exports = {

    async createUser (req, res) {
        
        const bodyData = req.body;

        try {
            
            const newUser = await User.create(bodyData);
            return res.status(201).json(newUser);

        } catch(err) {
            
            return res.status(400).json(err);
        }
    },

    async getUsers (req, res) {

        try {

            const users = await User.find();
            return res.status(200).json(users);
        
        } catch(err) {
            return res.status(404).json(err)
        }
    },

    async getUserById (req, res) {
         const { user_id } = req.params;
        
        try {
            
            const user = await User.findById(user_id);
            return res.status(200).json(user);

        }catch(err) {
            return res.status(404).json(err);
        }
    }
}