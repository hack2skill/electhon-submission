import { Body, Controller, Get, Logger, NotFoundException, Param, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CreatePovBody, PovService } from './pov.service';
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
    async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() data: CreatePovBody) {
			try {
				console.log(file);
				console.log(data);
				fs.copyFileSync(file.path, `./uploads/${file.filename}`);
				Logger.log('File copied');
				const shouldGivePOV = await this.povService.shouldGivePov(data, `https://28e4-2409-40f2-1039-ae05-6330-c03b-58aa-a639.ngrok-free.app/uploads/${file.filename}`);
				Logger.log('verify POV: ', shouldGivePOV);
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
					Logger.log('Should give POV, calling back to server of log');
					await axios.get(`http://localhost:5000/userCoupon/callback?userId=${data.externalId}`, {
						params: {
							shouldGivePov: shouldGivePOV,
							externalId: data.externalId,
						}
					})
				}
				return {
					pov: shouldGivePOV,
				};
			} catch (error) {
				Logger.error('Error occured while upload file', error);
				throw error;
			}
    }
}
