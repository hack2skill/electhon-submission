import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserCoupon } from "./coupon.schema";

@Injectable()
export class CouponService {
    constructor(
        @InjectModel('UserCoupon') private couponModel: Model<UserCoupon>,
    ) {}

    async getCouponOfUser(userId: string) {
        return await this.couponModel.findOne({
            userId,
        })
    }

    async addCouponToUser(userId: string, coupon: {
        id: string,
        title: string,
        description: string,
    }) {
        console.log('##############');
        const currentCoupons = await this.getCouponOfUser(userId);
        console.log(currentCoupons);
        if (currentCoupons === null) {
            console.log('current is null');
            return await this.couponModel.create({
                coupons: [{
                    description: coupon.description,
                    id: coupon.id,
                    title: coupon.title
                }],
                userId,
            });
        }
        const exisitingCoupon = currentCoupons.coupons.find(cp => cp.id === coupon.id);
        console.log(exisitingCoupon);
        if (exisitingCoupon === null || exisitingCoupon === undefined) {
            currentCoupons.coupons.push(coupon);
            await currentCoupons.save();
        }
        return await this.getCouponOfUser(userId);
    }
}