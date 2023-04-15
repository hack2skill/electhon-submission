import { Body, Controller, Get, Logger, NotFoundException, Param, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { PovService } from './pov.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { diskStorage } from 'multer';
import * as fs from 'fs';
import { extname } from 'path';
import axios from 'axios';

@Controller('pov')
export class PovController {
    constructor(private readonly povService: PovService) {}

    @Get()
    async getPovs(@Query('hash') hash: string) {
        const pov = await this.povService.getPov(hash);
        if (pov === null || pov === undefined) {
            throw new NotFoundException(`No POV found for hash: ${hash}`);
        }
		return pov;
    }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() data: {
        shouldGivePOV: boolean,
        callbackUrl: string,
        externalId: string,
		hash: string,
		lat: number,
		long: number,
    }) {
			try {
				// await axios.get(data.callbackUrl, {
					// 		params: {
						// 				shouldGivePov: data.shouldGivePOV,
						// 				externalId: data.externalId,
						// 		}
						// })
						const shouldGivePOV = data.shouldGivePOV;
					if (shouldGivePOV) {
						await this.povService.createPov({
							externalId: data.externalId,
							hash: data.hash,
							localtion: {
								lat: data.lat,
								long: data.long,
							},
							time: new Date(),
						});
					}
					return {
						pov: data.shouldGivePOV,
					};
			} catch (error) {
				Logger.error('Error occured while upload file', error);
				throw error;
			}
    }
}
