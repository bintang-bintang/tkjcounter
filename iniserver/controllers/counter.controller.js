
const counterModel = require(`../models/index`).counter


exports.addCounter = async (request,response) =>{
    try {
        await counterModel.create({angka: 2})

        return response.json({
            success: true,
            message: "Success.",
        });
    } catch (error) {
        return response.status(500).json({
            success: false,
            message: error.message
        });
    }
}


exports.showAngka = async (request,response) =>{
    try {
        const getall = await counterModel.findOne({where: {counterID: 1}})
        return response.json({
            success: true,
            data: getall,
            message: "Success.",
        });
    } catch (error) {
        return response.status(500).json({
            success: false,
            message: error.message
        });
    }
}

exports.counterUp = async (request,response) =>{
    try {
        const findCount = await counterModel.findOne({where: {counterID: 1}})
        let x ={
            angka: findCount.angka + 1
        }
        await counterModel.update(x, {where: {counterID: findCount.counterID}})

        return response.json({
            success: true,
            message: "Increase angka +1.",
            data: counterModel.angka
        });

    } catch (error) {
        return response.status(500).json({
            success: false,
            message: error.message,
            angka: counterModel.angka
        });
    }
}

exports.counterDown = async (request,response) =>{
    try {
        const findCount = await counterModel.findOne({where: {counterID: 1}})
        let x ={
            angka: findCount.angka - 1
        }
        await counterModel.update(x, {where: {counterID: findCount.counterID}})

        return response.json({
            success: true,
            message: "Subtract angka +1.",
        });
    } catch (error) {
        return response.status(500).json({
            success: false,
            message: error.message
        });
    }
}
