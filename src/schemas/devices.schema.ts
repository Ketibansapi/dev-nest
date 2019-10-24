import { Schema } from "mongoose";

export const DevicesSchema = new Schema({
    device_code: String,
    active: Boolean,
    credential: Object
})

export class DeviceDto {
    device_code: String;
    active: Boolean;
    credential: CredentialInterface;

    get getClientId() {
        return this.credential.client_id;
    }

    get getClientSecret() {
        return this.credential.client_secret;
    }
}

export interface CredentialInterface {
    client_id: String,
    client_secret: String
}

export interface DeviceInterface {
    _id: String,
    device_code: String,
    active: Boolean,
    credential: Object
}