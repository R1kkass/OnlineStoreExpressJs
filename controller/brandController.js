const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')


class BrandController{
    async create(req, res){
        try{
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
        }catch(e){
            return ApiError.badRequest(e.message)
        }
    }

    async getAll(req, res){
        try{
        const brands = await Brand.findAll()
        return res.json(brands)
        }catch(e){
            return ApiError.badRequest(e.message)
        }
    } 

}

module.exports = new BrandController()