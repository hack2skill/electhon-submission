import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CouponController } from './coupon.controller';
import { CouponService } from './coupon.service';
import { UserCouponSchema } from './coupon.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "UserCoupon", schema: UserCouponSchema }
    ]),
  ],
  controllers: [CouponController],
  providers: [CouponService]
})
export class CouponModule {}
