import { Body, Controller, Get, Logger, NotFoundException, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
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
    async getPovs(@Param('hash') hash: string) {
        const pov = await this.povService.getPov(hash);
        if (pov === null || pov === undefined) {
            throw new NotFoundException(`No POV found for hash: ${hash}`);
        }
    }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() data: {
        shouldGivePOV: boolean,
        callbackUrl: string,
        externalId: string,
    }) {
			try {
				console.log(file);
				const fileExtName = extname(file.originalname);
				const randomName = Array(4)
					.fill(null)
					.map(() => Math.round(Math.random() * 16).toString(16))
					.join('');
					await axios.get(data.callbackUrl, {
							params: {
									shouldGivePov: data.shouldGivePOV,
									externalId: data.externalId,
							}
					})
					return {
							pov: data.shouldGivePOV,
					};
			} catch (error) {
				Logger.error('Error occured while upload file', error);
				throw error;
			}
    }
}
