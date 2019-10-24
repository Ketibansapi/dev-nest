import { Schema } from "mongoose";

export const DevicesSchema = new Schema({
    deviceCode: String,
    active: Boolean,
    credential: Array
})