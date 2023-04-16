import { Inject, Injectable, Logger, UploadedFile, UseInterceptors } from '@nestjs/common';
import { POV } from './pov.schema';
import { Model } from 'mongoose';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { diskStorage } from 'multer';
import { InjectModel } from '@nestjs/mongoose';
import {v4 as uuid} from 'uuid';
import axios from 'axios';
import config from 'src/config';

export class CreatePovBody {
        shouldGivePOV: boolean;
        callbackUrl: string;
        externalId: string;
		hash: string;
		lat: number;
		long: number;
}

export const pollingBoothsLocations = [{
    lat: 100,
    long: 100
}, {
    lat: 1000,
    long: 1000
}, {
    lat: 2000,
    long: 2000,
}]

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

    async shouldGivePov(data: CreatePovBody, filename: string) {
        if (await this.checkMLModel(data, filename) === false) {
            Logger.log('No inked finger detected');
            return false;
        }
        let minDistance = 1000;
        for (const booth of pollingBoothsLocations) {
            minDistance = Math.min(minDistance, this.euclidDistance(booth, { lat: data.lat, long: data.long }));
        }
        if (minDistance < 500) {
            Logger.log('POV should be given')
            return true;
        }
        Logger.log('Too far away from booth')
        return false;
    }

    async checkMLModel(data: CreatePovBody, filename: string): Promise<boolean> {
        try {
            Logger.log('Check ML model start');
            const response = await axios.post('https://api.ximilar.com/recognition/v2/classify/', {
                task: config().ml.taskId,
                version: '3',
                records: [{
                    _url: filename 
                }],
            }, {
                headers: {
                    Authorization: `Token ${config().ml.accessToken}`,
                    "Content-Type": "application/json",
                }
            });
            Logger.log(response?.data);
            if (response?.data?.records[0]?.best_label?.name === "voted") {
                return true;
            }
            return false;
        } catch (error) {
            Logger.error(`Error occured on ML model`, error);
            throw error;
        }
    }

    private euclidDistance(p1: {lat: number, long: number}, p2: { lat: number, long: number }) {
        return Math.sqrt(Math.pow(p1.lat - p2.lat, 2) + Math.pow(p1.long - p2.long, 2));
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
