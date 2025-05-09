const imageService = require("../services/image.services");

const imageItem = async(req, res)=>{
    console.log("daylaaddcarrtitem",req.body);
    const user = await req.user;
    try {
        const imageItem = await imageService.createImage( req.body);
        console.log("jjj");
        return res.status(200).send(imageItem)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}
const getAllImages = async(req, res)=>{
    
    try {
        const product = await imageService.getAllImages(req);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({error:error.message})
        
    }
}

module.exports = {
    imageItem,getAllImages
}