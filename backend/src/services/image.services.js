const ImageItem = require("../models/imageItem.model");
async function createImage(reqData){
    try {
    const image = new ImageItem({images: reqData})
    const creatImage = await image.save();
    return creatImage;
    } catch (error) {
        throw new Error(error.message)
    }
    
}
async function getAllImages(reQuery){
    
    const category = await ImageItem.find({})
    return category
}

module.exports = {createImage,getAllImages}