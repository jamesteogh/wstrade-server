import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    ticker: {
        type: String,
        required: [true, 'Please input stock ticker'],
        unique: true
    },
    sharesNum: {
        type: Number,
        default: 0
    },
    buyPrice: Number,
    currentVal: {
        type: Number,
        default: 0
    },
    gainLoss: {
        type: Number,
        default: 0
    },
    dailyChange: Number,
    createdAt: {
        type: Date,
        default: new Date()
    },
})

const PostStockTracker = mongoose.model('PostStockTracker', postSchema);

export default PostStockTracker;