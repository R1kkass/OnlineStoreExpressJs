const {Basket} = require('../models/models')
const ApiError = require('../error/ApiError')

class BasketController{
    async getAll(req, res){
        try{
        let {login} = req.body
        const baskets = await Basket.findAll({where: {login}})
        return res.json(baskets)
        }catch(e){
            return ApiError.badRequest(e.message)
        }
    }

    async deleteOne(req, res){
        try{
        let {id} = req.body
        const baskets = await Basket.destroy({where: {id}})
        return res.json(baskets)
        }catch(e){
            return ApiError.badRequest(e.message)
        }
    }

    async create(req, res){
        try{
        let {login, count, deviceName, price, img, deviceId } = req.body
        const basket = await Basket.create({login, count, deviceName, price, img, priceSumm: price, deviceId})
        return res.json({basket})
        }catch(e){
            return ApiError.badRequest(e.message)
        }
    }

    async plusCount(req, res){
        try{
        let {id, count, price} = req.body
        console.log(count);
        if(count>0){
        const basket = await Basket.update({count:count, priceSumm: count*price}, {where: {id}})
        return res.json({basket})
        }
    }catch(e){
        return ApiError.badRequest(e.message)
    }
}

    
    
}

module.exports = new BasketController()