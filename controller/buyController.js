const {BuyProduct, Order} = require('../models/models')
const ApiError = require('../error/ApiError')
const {Basket} = require('../models/models')

class BuyController{
    async create(req, res){
        try{
        const {name, price, firstName, lastName, count, phone, address,login} = req.body
        const login2 = login || 'net'
        
        if(name==undefined || price==undefined || lastName==undefined || lastName == undefined || count == undefined || address == undefined || phone == undefined){
            return ApiError.badRequest(e.message)
        }
        console.log(login2);
        const order = await Order.create({login: login2})
        const buyProduct = await BuyProduct.create({name, firstName, lastName, price,phone, address,login: login2, count, orderId: order.id, priceSumm: price*count})
        return res.json(buyProduct)
        }catch(e){
            console.log(e)
            return ApiError.badRequest(e.message)
        }
    }

    async getAll(req, res){
        try{
        const buyProduct = await BuyProduct.findAll()
        return res.json(buyProduct)
        }catch(e){
            return ApiError.badRequest(e.message)
        }

    }

    async createAll(req, res){
        try{
        let {info, firstName, lastName, price, phone, address} = req.body
        info = JSON.parse(info)
        console.log(info);
        const order = await Order.create({login: info[0].login})
        for(let i = 0; i<info.length; ++i ){
        let name = info[i].deviceName
        let count = info[i].count
        let price = info[i].price
        let priceSumm = info[i].priceSumm
        var login = info[i].login
        var basket = await BuyProduct.create({name, firstName, lastName, price,phone, address, count, priceSumm, login, orderId: order.id})
        
    }
    const baketsOrder = await Basket.destroy({where: {login}})
    return res.json({basket})
    }catch(e){
        return ApiError.badRequest(e.message)
    }}

    async getOrder(req, res){
            try{
            const {login} = req.query
            const order = await Order.findAll({where:{login}, include: {all: true}})
            return res.json({order})
            }catch(e){
                return ApiError.badRequest(e.message)
            }
        
    } 

    async getOrderAdm(req, res){
        try{
        const {login} = req.query
        const order = await Order.findAll({include: {all: true}})
        return res.json({order})
        }catch(e){
            return ApiError.badRequest(e.message)
        }
    
} 

    async deleteOrder(req,res){
        try{
        const {id} = req.body
        const order = await Order.destroy({where: {id}})
        const basket = await BuyProduct.destroy({where: {orderId: id}})
        return res.json({order})
        }catch(e){
            console.log(e);
            return ApiError.badRequest(e.message)
        }
    }

    async editOrder(req,res){
        try{
        const {id, state} = req.body
    
        const order = await Order.update({ state: state}, {where: {id: id}})
        return res.json({order})
        }catch(e){
            console.log(e);
            return ApiError.badRequest(e.message)
        }
    }
}

module.exports = new BuyController()