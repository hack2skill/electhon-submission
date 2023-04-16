import * as mongoose from 'mongoose';

export const POVSchema = new mongoose.Schema({
    hash: { type: String, required: true },
    pov: [{ type: {
        id: { type: String },
        externalId: { type: String },
        time: { type: Date },
        location: { type: {
            lat: { type: Number },
            long: { type: Number },
        }}
    }}],
})

export class POVType {
    id: string;
    externalId: string;
    time: Date;
    localtion: {
        lat: number;
        long: number;
    }
}

export class POVModel {
    hash: string;
    pov: POVType[];
}

export class POV extends mongoose.Model {
    hash: string;
    pov: POVType[];
}