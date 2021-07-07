const Product = require('../../models/Product');

module.exports = {
    
    async createProduct (req, res) {
        
        const bodyData = req.body;
        const { user_id } = req.params;

        try {

            const product = {username: user_id, ...bodyData };

            const newProduct = await Product.create(product);
            await newProduct.populate('username').execPopulate();

            return res.status(201).json(newProduct);

        }catch(err) {
            
            return res.status(400).send(err)
        
        }
    },

    async getUserProduct (req, res) {
       
        const { user_id } = req.params;

        try {

            const userProduct = await Product.find({ username: user_id});
            return res.status(200).json(userProduct);

        }catch(err) {
            return res.status(400).send(err)
        }
    },

    async updateProduct (req, res) {
        
        const bodyData = req.body;
        const { product_id } = req.params;

        try {

            const updatedProduct = await Product.findByIdAndUpdate(product_id, bodyData, { new: true, useFindAndModify:true }); 
            return res.status(200).json(updatedProduct);

        }catch(err) {
            return res.status(400).send(err)
        }
    },

    async deleteProduct (req, res) {
    
        const { product_id } = req.params;

        try {

            const deletedProduct = await Product.findByIdAndDelete(product_id);
            return res.status(200).json(deletedProduct);
        
        }catch(err) {
            return res.status(400).send(err)
        }
    },

    async getProducts (req, res) {
        
        try{

            const products = await Product.find();
            return res.status(200).json(products);

        }catch(err) {
            
            return res.status(400).json(err);
        
        }
      
    },

    async getProductById (req, res) {
        
        const { product_id } = req.params;

        try {

        const product = await Product.findById(product_id);
        return res.status(200).json(product);            

        }catch(err) {

            return res.status(400).json(err);

        }
    
    }
}