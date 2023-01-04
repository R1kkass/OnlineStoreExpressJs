const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')
const { Op } = require("sequelize");

class TypeController{
    async create(req, res){
        try{
        const {name } = req.body
        const type = await Type.create({name})
        return res.json(type)
        }catch(e){
            return ApiError.badRequest(e.message)
        }
    }

    async getAll(req, res){
        try{
        const types = await Type.findAll()
        return res.json(types)
        }catch(e){
            return ApiError.badRequest(e.message)
        }
    }
    
    async delete(req, res){
        try{
            const {name} = req.body
        const types = await Type.destroy({where: {[Op.or]: [
            { name: name },
            { id: name }
          ]}})
          console.log(name);
        return res.json(types)
        }catch(e){
            return ApiError.badRequest(e.message)
        }
    }

}

module.exports = new TypeController()