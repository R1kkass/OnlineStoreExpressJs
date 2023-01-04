const {FeedBack} = require('../models/models')
const ApiError = require('../error/ApiError')


class FeedbackController{
    async create(req, res){
        try{
        const {login, rating, text, deviceId} = req.body
        const findFeedback = await FeedBack.findAll({where:{deviceId, login}})
        console.log(findFeedback);
        if(findFeedback.length===0){
            
        const feedback = await FeedBack.create({login, rating, text, deviceId})
        return res.json(feedback)
        }

        return res.json({message: "Вы уже оставили отзыв"})
        }catch(e){
            return ApiError.badRequest(e.message)
        }
    }

    async getAll(req, res){
        try{

        
        const {deviceId, page, limit} = req.body
        let offset = page * limit - limit
        const feedback = await FeedBack.findAndCountAll({where: {deviceId},limit, offset })
        return res.json(feedback)
        }catch(e){
            return ApiError.badRequest(e.message)
        }
    }

    async delete(req, res){
        try{
        const {id} = req.body
        const feedback = await FeedBack.destroy({where: {id}})
        return res.json(feedback)
        }catch(e){
            return ApiError.badRequest(e.message)
        }
    }
}

module.exports = new FeedbackController()