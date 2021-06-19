import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

export const fetchProduct = asyncHandler(async (req,res)=>{
    const product = await Product.findById(req.params.id)
    if(product)
    {
        res.json(product)
    }
    else
    {
        res.status(404).json({message:"Product Not Found!!!"})
    }
    

})

export default fetchProduct