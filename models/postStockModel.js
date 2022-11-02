import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    symbol: {
        type: String,
        // required: [true],
    },
    shortName: String,
    userId: {
        type: mongoose.Schema.ObjectId,
        required: [true],
    },
    regularMarketChange: {
        type: Object,
    },
    regularMarketPrice: {
        type: Object,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

const PostStockTracker = mongoose.model('PostStockTracker', postSchema);

export default PostStockTracker;