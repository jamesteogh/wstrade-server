// import Model
import PostStockTracker from '../models/postStockModel.js';

export const getPosts = async (req, res) => {
    try {
        const postStockFav = await PostStockTracker.find();
        res.status(200).json(postStockFav);
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newStockFav = new PostStockTracker(post);
    try {
        await newStockFav.save();
        res.status(201).json(newStockFav);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
    
}