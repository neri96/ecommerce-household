import mongoose from 'mongoose';

const productShema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    images: { type: [String], required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    deliveryPrice: { type: Number, default: 250 },
    reviews: { 
        type: [{ 
            author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
            rate: Number, 
            review: String,
            createdAt: String 
        }],
        default: [] 
    },
    orderedBy: { 
        type: [{ id: mongoose.Schema.Types.ObjectId, isDelivered: Boolean }], 
        ref: 'User',
        default: [] 
    },
    description: { type: String }
}, { timestamps: true });

export default mongoose.models['Product'] || mongoose.model('Product', productShema);