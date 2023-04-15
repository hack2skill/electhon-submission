import { Inject, Injectable, UploadedFile, UseInterceptors } from '@nestjs/common';
import { POV } from './pov.schema';
import { Model } from 'mongoose';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { diskStorage } from 'multer';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PovService {
    constructor(
        @InjectModel('ProofOfVotes') private proofOfVoteModel: Model<POV>,
    ) {}

    async getPov(hash: string) {
        return await this.proofOfVoteModel.findOne({
            hash,
        });
    }



}
