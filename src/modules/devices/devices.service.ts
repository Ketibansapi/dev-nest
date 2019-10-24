import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { DeviceDto, DeviceInterface } from '../../schemas/devices.schema';

@Injectable()
export class DevicesService {
    constructor(@InjectModel('Devices') private devicesModel : Model<any>) {}

    async create(devicesDto : DeviceDto) {
        return await new this.devicesModel(devicesDto).save();
    }

    async getAll() : Promise<DeviceInterface[]> {
        return await this.devicesModel.find();
    }

    async getById(id : String) : Promise<DeviceInterface> {
       return await this.devicesModel.findOne({
           _id: id
       });
    }

    async getByParam(param : DeviceDto) : Promise<DeviceInterface[]> {
        return await this.devicesModel.find(param);
    }

    async updateById(id: String, deviceDto : DeviceDto) {
        return await this.devicesModel.updateOne({
            _id: id
        }, deviceDto);
    }

    async delete(id: String) {
        return await this.devicesModel.deleteOne({
            _id: id
        });
    }

    async generateCredential(id: String) {
        //Create client_id
        //Create client_secret
    }
}

