// import Model
import PostStockTracker from '../models/postStockModel.js';

export const getPosts = async (req, res) => {
    let { userId } = req.query;
    console.log(userId);
    try {
        const postStockFav = await PostStockTracker.find({ userId: userId });

        res.status(200).json({data: postStockFav, success: true, error: '' });
    } catch (error) {
        res.status(404).json({ data: {}, success: false, error:'' });
    }
};

export const createPost = async (req, res) => {
    console.log(req.body);

    try {
        const newStockFav = new PostStockTracker(req.body);
        await newStockFav.save();
        res.status(200).json({ status: 200, data: newStockFav, error: '' });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const deletePost = async (req, res) => {
    const { symbol } = req.query;
    
    try {
    const newStockFav = await PostStockTracker.findOneAndDelete({ symbol });
    res.status(200).json({ status: 200, data: {}, error: 'deleted' });
    } catch (error) {
    res.status(409).json({ message: error.message });
    }
};
