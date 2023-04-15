import { Inject, Injectable, UploadedFile, UseInterceptors } from '@nestjs/common';
import { POV } from './pov.schema';
import { Model } from 'mongoose';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { diskStorage } from 'multer';
import { InjectModel } from '@nestjs/mongoose';
import {v4 as uuid} from 'uuid';

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

    async createPov(data: {
        externalId: string,
        time: Date,
        localtion: {
            lat: number,
            long: number
        },
        hash: string,
    }) {
        const current = await this.getPov(data.hash);
        if (current === null) {
            return await this.proofOfVoteModel.create({
                hash: data.hash,
                pov: [{
                    externalId: data.externalId,
                    id: uuid(),
                    localtion: data.localtion,
                    time: data.time,
                }]
            })
        }
        current.pov.push({
            hash: data,
            pov: [{
                externalId: data.externalId,
                id: uuid(),
                localtion: data.localtion,
                time: data.time,
            }]
        })
    }

}
