import mongoose from "mongoose";

export const UserCouponSchema = new mongoose.Schema({
    userId: { type: String },
    coupons: [{
        id: { type: String },
        title: { type: String },
        description: { type: String },
    }]
})

export class UserCoupon {
    userId: string;
     coupons: [{
        id: string,
        title: string,
        description: string,
    }]
}

export class UserCouponModel {
    userId: string;
    coupons: [{
        id: string,
        title: string,
        description: string,
    }]
}