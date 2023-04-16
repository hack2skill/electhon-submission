import { Controller, Get, Logger, NotFoundException, Query } from "@nestjs/common";
import { CouponService } from "./coupon.service";

const coupon = {
    id: '11',
    title: 'Vote Incentive',
    description: '10% off upto 500rs, on purchase above 1499',
}

@Controller('userCoupon')
export class CouponController {
    constructor(
        private readonly couponService: CouponService,
    ) {}

    @Get()
    async getUserCoupon(@Query('userId') userId: string) {
        Logger.log('#!!##!');
        const userCoupon = await this.couponService.getCouponOfUser(userId);
        if (userCoupon === null) {
            throw new NotFoundException("COupon not found");
        }
        return userCoupon;
    }

    @Get('callback') 
    async callback(@Query('externalId') externalId: string, @Query('shouldGivePov') shouldGivePov: string) {
        console.log('111111111111111111111');
        if (shouldGivePov === "true") {
            console.log('##########3');
            await this.couponService.addCouponToUser(externalId, coupon);
        }
    }
}