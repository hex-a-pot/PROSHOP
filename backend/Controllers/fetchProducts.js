import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

export const fetchProducts = asyncHandler(async (req,res)=>{
    const products = await Product.find({})
    // res.status(401)
    // throw new Error('Not Authorized!!!')
    res.json(products)
})
    
export default fetchProducts