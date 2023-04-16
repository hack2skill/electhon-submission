import { Module } from '@nestjs/common';
import { PovController } from './pov.controller';
import { PovService } from './pov.service';
import { MongooseModule } from '@nestjs/mongoose';
import { POVSchema } from './pov.schema';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "ProofOfVotes", schema: POVSchema }
    ]),
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const name = file.originalname.split('.')[0];
          const fileExtName = extname(file.originalname);
          const randomName = Array(4)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          callback(null, `${name}-${randomName}${fileExtName}`);
        },
      }),
    }),
  ],
  controllers: [PovController],
  providers: [PovService]
})
export class PovModule {}
