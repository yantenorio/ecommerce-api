const Cart = require('../../models/Cart');

module.exports = {

    async createCart (req, res) {

        const bodyData = req.body;
        const { user_id } = req.params;

        try{

            const cart = await Cart.create({...bodyData, username: user_id});
            await cart.populate('products').execPopulate();
            res.status(201).json(cart)

        }catch(err)  {

            res.status(400).json(err)

        }

    },

    async getCart (req, res) {

        const {user_id, cart_id} = req.params;

        try {

            const cart = await Cart.findById(cart_id).populate('products');
            return res.status(200).json(cart);            

        }catch(err) {
            res.status(400).json(err)
        }

    },  

    async getUserCart (req, res) {

        const { user_id } = req.params;

        try {

            const userCart = await Cart.find({username: user_id}).populate('products');
            return res.status(200).json(userCart);

        }catch(err) {
            res.status(400).json(err)
        }

    }
 
}