import mongoose from 'mongoose';

import { UserRoles } from '../ts/types';

const userShema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    role: { type: String, required: true, default: UserRoles.CUSTOMER },
    email: { type: String, required: true, unique: true },
    purchaseHistory: { type: [mongoose.Schema.Types.ObjectId], ref: 'Product', default: [] },
    address: { type: String, default: null },
    password: { type: String, required: true }
});

export default mongoose.models['User'] || mongoose.model('User', userShema);